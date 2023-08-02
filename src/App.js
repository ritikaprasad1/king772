import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import Otp from "./pages/otp"
import Dashboard from "./pages/dashboard"

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path ="/otp" element ={<Otp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
