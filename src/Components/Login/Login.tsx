import React, { useState } from 'react'
import { supabase } from '../../service/api';
import { useNavigate } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loding, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {
  e.preventDefault();
  setLoading(true);

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password: password.trim(),
  });

  console.log("Email:", email, "Password:", password);
  console.log("Login Error:", error);

  if (error) {
    setError(error.message);
  } else {
    navigate('/');
  }

  setLoading(false);
}



  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
  <form 
    onSubmit={handleLogin} 
    className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm flex flex-col items-center"
  >
    <h2 className="text-3xl font-extrabold text-indigo-800 mb-2">Welcome back 😍</h2>
    <p className="text-sm text-gray-500 mb-6">Please login to your account</p>

    <input 
      type="text" 
      placeholder="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />

    <input 
      type="password" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />

    <button 
      type="submit"
      disabled={loding}
      className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
    >
      {loding ? 'Logging In...' : 'Login'}
    </button>

    <p className="mt-4 text-sm text-gray-500">
      Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
    </p>
  </form>
</div>


  )
}

export default Login
