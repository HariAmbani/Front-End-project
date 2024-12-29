import './App.css';
import MainLayout from './pages/MainLayout';
import LoginPage from './pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <MainLayout/>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
