import "./App.css";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import ModalCart from "./components/ModalCart.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const ToggleModal = () => setModal(!modal);

  const [alert, setAlert] = useState(false);
  const ToggleAlert = () => setAlert(!alert);
  const [alertProps, setAlertProps] = useState({ title: "", text: "" });

  const buySuccess = () => {
    setAlertProps({
      title: "Success",
      text: "Thanks for your purchase",
    });
    startAlert();
  };

  const productAdded = (name: string) => {
    setAlertProps({
      title: "Success",
      text: `${name} added to cart`,
    });
    startAlert();
  };

  const startAlert = () => {
    ToggleAlert();
    setTimeout(() => {
      if (alert) setAlert(false);
    }, 5000);
  };

  return (
    <>
      <Header openModal={ToggleModal} />
      <ModalCart show={modal} close={ToggleModal} buy={buySuccess} />
      <Alert show={alert} close={ToggleAlert} {...alertProps} />
      <Main productAdded={productAdded} />
      <Footer />
    </>
  );
}

export default App;
