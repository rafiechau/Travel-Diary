import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const atPublicPage = ['/login', '/register', '/'].includes(location.pathname);

    // If there is userData and the user is at a public page, redirect to the home page
    if (userData && atPublicPage) {
      navigate('/home'); // asumsikan '/home' adalah halaman beranda setelah login
    }

    // If there is no userData and the user is not at a public page, redirect to the login page
    if (!userData && !atPublicPage) {
      navigate('/login');
    }

  }, [navigate, location.pathname]);


  return; 
  };