import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Layout />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
