
import { Button } from 'semantic-ui-react';
import { useAuth } from '../../contexts/authContext';

function Login() {
    const authContext = useAuth();
    
    return (
        <div>
            <Button onClick={() => {
                authContext.setIsAuthenticated(true);
            }}
      >
            Giriş yap
        </Button>
    </div >
  )
}

export default Login
