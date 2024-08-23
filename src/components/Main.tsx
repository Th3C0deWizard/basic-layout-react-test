import "../styles/Main.css";
import ProductsContainer from "./ProductsContainer";

export default function Main() {
  return (
    <main className="main">
      <aside className="main__aside">Contenido lateral</aside>
      <ProductsContainer />
    </main>
  );
}
