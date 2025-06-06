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
    <div className="flex items-center justify-center min-h-screen">

      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <p className='text-indigo-900 font-bold text-2xl mb-5' >Welcome back 😍</p>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="px-3 py-2 border border-black mb-3 rounded" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="px-3 py-2 border border-black mb-3 rounded" />
        <button type="submit"
          disabled={loding}
          className="todoBtn px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          {loding ? 'Logging In...' : 'Login'}
        </button>
      </form>
    </div>

  )
}

export default Login
