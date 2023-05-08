import React from "react";
import "./styles/style.scss";
import Routing from "./routing/routing";
import Header from "./components/header/header";
import Products from "./constants/Products";
import Footer from "./components/footer/footer";
import Info from "./constants/Info";


function App() {
  

  document.title = Info.nameBuniss + " - " + Info.nameSystem;
  return (
    <div className="App">
      <header>{Products.components.header && <Header />}</header>
      <main>
        <Routing />
      </main>
      <footer>{Products.components.footer && <Footer />}</footer>
    </div>
  );
}

export default App;
