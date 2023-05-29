import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <div className="container-fluid">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  </div>
  );
}

export default App;
