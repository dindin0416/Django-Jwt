
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
          <PrivateRoute component={HomePage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;