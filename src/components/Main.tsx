import "../styles/Main.css";
import ProductsContainer from "./ProductsContainer";

type MainProps = {
  productAdded: (name: string) => void;
};

export default function Main({ productAdded }: MainProps) {
  return (
    <main className="main">
      <aside className="main__aside">Contenido lateral</aside>
      <ProductsContainer productAdded={productAdded} />
    </main>
  );
}
