import "./App.css";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import ModalCart from "./components/ModalCart.tsx";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <Header openModal={Toggle} />
      <ModalCart show={modal} close={Toggle} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
