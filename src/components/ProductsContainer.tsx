import GameCard from "./GameCard";
import "../styles/ProductsContainer.css";

export default function ProductsContainer() {
  const games = [
    {
      title: "Minecraft",
      price: 60,
      image: "https://via.placeholder.com/150",
      category: "action-adventure",
    },
    {
      title: "Just Dance 2021",
      price: 45,
      image: "https://via.placeholder.com/150",
      category: "platformer",
    },
    {
      title: "The last of us",
      price: 58,
      image: "https://via.placeholder.com/150",
      category: "racing",
    },
    {
      title: "Splatoon 2",
      price: 63,
      image: "https://via.placeholder.com/150",
      category: "shooter",
    },
    {
      title: "Super Smash Bros. Ultimate",
      price: 39,
      image: "https://via.placeholder.com/150",
      category: "fighting",
    },
    {
      title: "Animal Crossing: New Horizons",
      price: 40,
      image: "https://via.placeholder.com/150",
      category: "simulation",
    },
    {
      title: "Pokémon Sword and Shield",
      price: 50,
      image: "https://via.placeholder.com/150",
      category: "role-playing",
    },
    {
      title: "Red Dead Redemption 2",
      price: 35,
      image: "https://via.placeholder.com/150",
      category: "action-adventure",
    },
  ];

  return (
    <section className="main__products">
      {games.map((game, index) => (
        <GameCard
          key={index}
          title={game.title}
          price={game.price}
          image={game.image}
          category={game.category}
        />
      ))}
    </section>
  );
}
