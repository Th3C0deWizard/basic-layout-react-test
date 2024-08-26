import "../styles/Main.css";
import ProductsContainer from "./ProductsContainer";
import Aside from "./Aside";
import { useState } from "react";
import { type Game } from "./GameCard";

type MainProps = {
  productAdded: (name: string) => void;
};

export default function Main({ productAdded }: MainProps) {
  const allGames = [
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

  const [games, setGames] = useState<Array<Game>>(allGames);

  const handleSearch = (searchValue: string) => {
    if (
      searchValue === undefined ||
      searchValue === null ||
      typeof searchValue !== "string" ||
      searchValue.trim() === ""
    ) {
      setGames(allGames);
    } else {
      const filteredGames = allGames.filter((game) =>
        new RegExp(searchValue).test(game.title.toLowerCase()),
      );
      setGames(filteredGames);
    }
  };

  return (
    <main className="main">
      <Aside onSearch={handleSearch} />
      <ProductsContainer products={games} productAdded={productAdded} />
    </main>
  );
}
