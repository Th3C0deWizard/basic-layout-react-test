import "../styles/Main.css";
import ProductsContainer from "./ProductsContainer";
import Aside from "./Aside";

type MainProps = {
  productAdded: (name: string) => void;
};

export default function Main({ productAdded }: MainProps) {
  return (
    <main className="main">
      <Aside />
      <ProductsContainer productAdded={productAdded} />
    </main>
  );
}
