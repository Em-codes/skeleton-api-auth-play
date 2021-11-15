import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDetails from './components/UserDetails';


function App() {
 return(
   <Router>
     <Routes>
       <Route path="/" element={<Login />}/>
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/dashboard" element={<Dashboard />}/>
       <Route path="/dashboard/:id" element={<UserDetails />} />
     </Routes>
   </Router>
  );
}

export default App;
