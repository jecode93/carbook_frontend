import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
