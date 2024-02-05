import logo from '../logo.svg';
import '../App.css';
import Login from "../components/Login";
import {AuthProvider} from "../context/AuthContext.js";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import GuardedRoute from "./GuardedRoute";


function Home() {
  return null;
}

function App() {
  return (
      <AuthProvider>
        <Router location={}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <GuardedRoute path="/home" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App;
