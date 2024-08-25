import "../styles/GameCard.css";

interface GameCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
  productAdded: (name: string) => void;
}

type Product = {
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
    <article className="game__item" data-category={props.category}>
      <img src={props.image} alt={props.title} />
      <div className="game__container">
        <div className="rating">
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
          <i className="fa-solid fa-star fa-lg"></i>
        </div>
        <div className="game__info">
          <h5>{props.title}</h5>
          <p>${props.price}</p>
        </div>
        <div className="offer__buttons">
          <button
            onClick={() => addToCart(props.title, props.price, props.image)}
          >
            Add to cart <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
