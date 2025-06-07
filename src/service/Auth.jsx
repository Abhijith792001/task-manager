import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './api';

function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkSession() {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;

        if (session) {
          setIsAuthenticated(true);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    }
    checkSession();
  }, [navigate]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return isAuthenticated ? children : null;
}

export default PrivateRoute;
