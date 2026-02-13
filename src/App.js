import React from "react";
import Subnav from "./components/Subnav";
import Header from "./components/Header";
import Head from "./Home/Head";
import Featured from "./Home/Featured";
import Video from "./Home/Video";
import Videocontent from "./Home/Video-content";
import Funfact from "./Home/Funfact";
import Bestdeal from "./Home/Bestdeal";
import Properties from "./Home/Properties";
import Contact from "./Home/Contact";
import Contactinfo from "./Home/Contactinfo";
import Footer from "./components/Footer";


function App() {
  return (

    <div className="App">
      <Subnav />
      <Header />
      <Head />
      <Featured />
      <Video />
      <Videocontent />
      <Funfact />
      <Bestdeal />
      <Properties />
      <Contact />
      <Contactinfo />
      <Footer />

    </div>

  );
}

export default App;
