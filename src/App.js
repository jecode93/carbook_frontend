import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Motorcycles from './components/Motorcycles';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="relative md:flex">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Motorcycles />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
