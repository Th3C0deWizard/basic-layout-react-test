import GameCard, { type Game } from "./GameCard";
import "../styles/ProductsContainer.css";

type ProductsContainerProps = {
  products: Array<Game>;
  productAdded: (name: string) => void;
};

export default function ProductsContainer({
  products,
  productAdded,
}: ProductsContainerProps) {
  return (
    <section className="main__products">
      {products.map((game, index) => (
        <GameCard key={index} game={game} productAdded={productAdded} />
      ))}
    </section>
  );
}
