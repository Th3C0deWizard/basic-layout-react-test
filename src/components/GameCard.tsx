import "../styles/GameCard.css";

export type Game = {
  title: string;
  price: number;
  image: string;
  category: string;
  genres: Array<string | never>;
  playerSupport: Array<string | never>;
  platforms: Array<string | never>;
};

interface GameCardProps {
  game: Game;
  productAdded: (name: string) => void;
}

export type Product = {
  name: string;
  price: number;
  amount: number;
  image: string;
};

export default function GameCard(props: GameCardProps) {
  const addToCart = (name: string, price: number, image: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const product = cart.find((product: Product) => product.name === name);

    if (product) product.amount += 1;
    else cart.push({ name, price, image, amount: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    props.productAdded(name);
  };

  return (
    <article className="game__item" data-category={props.game.category}>
      <img src={props.game.image} alt={props.game.title} />
      <div className="game__container">
        <div className="rating">
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
        </div>
        <div className="game__info">
          <h5>{props.game.title}</h5>
          <p>${props.game.price}</p>
        </div>
        <div className="offer__buttons">
          <button
            onClick={() =>
              addToCart(props.game.title, props.game.price, props.game.image)
            }
          >
            Add to cart <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
