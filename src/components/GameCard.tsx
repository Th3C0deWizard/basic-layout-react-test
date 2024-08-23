import "../styles/GameCard.css";

interface GameCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function GameCard(props: GameCardProps) {
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
          <a href="">Order Now</a>
          <a href="">
            <i className="fa-solid fa-magnifying-glass fa-xs"></i>
          </a>
          <a href="">
            <i className="fa-regular fa-heart fa-xs"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-arrow-right-arrow-left fa-xs"></i>
          </a>
        </div>
      </div>
    </article>
  );
}
