import {BrowserRouter} from 'react-router-dom';
import './styles/App.scss';
import {AuthContext} from './context';
import {useEffect,useState} from 'react';
import AppRouter from './components/AppRouter';

function App() {
  const [isAuth,setIsAuth] = useState(false)
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    };
    setIsLoading(false);
  },[]);

  return (
    <AuthContext.Provider value={{
      isAuth,setIsAuth,isLoading
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
