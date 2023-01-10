import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Parents } from "./pages/parents";
import { Teacher } from "./pages/teacher";
import { Agenda } from "./pages/agenda";
import { Pictogramas } from "./pages/pictogramas";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { TablaJuejos } from "./pages/tablaJuegos";
import { ModificarAgenda } from "./pages/modificarAgenda";
import { Ayuda } from "./pages/ayuda";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";


  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Parents/>} path="/parents" />
            <Route element={<ModificarAgenda/>} path="/modificaragenda" />
            <Route element={<Teacher/>} path="/teacher" />
            <Route element={<Agenda/>} path="/agenda"/>
            <Route element={<Pictogramas/>} path="/pictogramas" />
            <Route element={<TablaJuejos/>} path="/juegos" />
            <Route element={<Ayuda/>} path="/ayuda" />
            <Route element={<Single/>} path="/single/:theid" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
