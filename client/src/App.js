import Login from "./components/login/login";
import Register from "./components/login/register";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
