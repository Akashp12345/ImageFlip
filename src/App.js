
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Home from "./component/Home";
import Liked from "./component/Liked";
function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/liked" element={<Liked/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
