
import Navbar from "./Components/Navbar/Navbar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import Login from "./Screens/Login/Login";
import Settings from "./Screens/ProfileSettings/Settings";
import Register from "./Screens/Register/Register";
import Single from "./Screens/Single/Single";
import Write from "./Screens/Write/Write";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./Components/Context/Context";
import SideMenu from "./Components/Menu/SideMenu";


function App() {
 const {user} = useContext(Context);
  const showRegister = () => {
    if (user) {
      return <HomeScreen/>;
    } else {
      return <Register/>;
    }
  }
  const showLogin = () => {
    if (user) {
      return <HomeScreen/>;
    } else {
      return <Login/>;
    }
  }
  const showWrite = () => {
    if (user) {
      return <Write/>;
    } else {
      return <Register/>;
    }
  }
  const showSettings = () => {
    if (user) {
      return <Settings/>;
    } else {
      return <Register/>;
    }
  }

  const [menuOpen,setMenuOpen] = useState(false)
  return ( <>
    <BrowserRouter>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Routes>
    <Route path="/" element={<HomeScreen/>}/>
    <Route path="/register" element={showRegister()}/>
    <Route path="/login" element={showLogin()}/>
    <Route path="/write" element={showWrite()}/>
    <Route path="/edit"element={showSettings()}/>
    <Route path="/posts/:postID" element={<Single/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
