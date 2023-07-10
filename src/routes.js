//Routes.js
import { Route, Routes as RoutesDom, useNavigate } from "react-router-dom"
import Login from "./pages/login/login";
import Cadastramento from "./pages/cadastramento/cadastramento";

import Menu from "./components/menu/menu";
import Landing from "./pages/landing-page/landing";


const Routes = () => {
  let nav = useNavigate();

  return (
      <RoutesDom>
        <Route path="/" index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Cadastramento />} />
        <Route path="home" element={<Menu nav={nav}/>} />
      </RoutesDom>
  )
}

export default Routes;