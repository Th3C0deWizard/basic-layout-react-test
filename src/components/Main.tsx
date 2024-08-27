import "../styles/Main.css";
import ProductsContainer from "./ProductsContainer";
import Aside, { type Search } from "./Aside";
import { useState } from "react";
import { type Game } from "./GameCard";

type MainProps = {
  productAdded: (name: string) => void;
};

export default function Main({ productAdded }: MainProps) {
  const allGames: Array<Game> = [
    {
      title: "Minecraft",
      price: 60,
      image: "https://via.placeholder.com/150",
      category: "action-adventure",
      genres: ["adventure", "survival", "sandbox"],
      playerSupport: [
        "multiplayer",
        "online competitive",
        "singleplayer",
        "LAN",
        "co-operative",
      ],
      platforms: ["windows", "macOs", "steamOs + linux"],
    },
    {
      title: "Just Dance 2021",
      price: 45,
      image: "https://via.placeholder.com/150",
      category: "platformer",
      genres: ["action"],
      playerSupport: ["local & party", "co-operative", "singleplayer"],
      platforms: ["windows"],
    },
    {
      title: "The last of us",
      price: 58,
      image: "https://via.placeholder.com/150",
      category: "racing",
      genres: ["action", "adventure", "survival"],
      playerSupport: ["singleplayer"],
      platforms: ["ps3"],
    },
    {
      title: "Splatoon 2",
      price: 63,
      image: "https://via.placeholder.com/150",
      category: "shooter",
      genres: ["action"],
      playerSupport: ["multiplayer", "online competitive"],
      platforms: ["switch"],
    },
    {
      title: "Super Smash Bros. Ultimate",
      price: 39,
      image: "https://via.placeholder.com/150",
      category: "fighting",
      genres: ["action"],
      playerSupport: [
        "multiplayer",
        "local & party",
        "LAN",
        "online competitive",
        "singleplayer",
      ],
      platforms: ["switch"],
    },
    {
      title: "Animal Crossing: New Horizons",
      price: 40,
      image: "https://via.placeholder.com/150",
      category: "simulation",
      genres: ["sandbox", "adventure"],
      playerSupport: ["co-operative", "LAN", "multiplayer", "singleplayer"],
      platforms: ["switch"],
    },
    {
      title: "Pokémon Sword and Shield",
      price: 50,
      image: "https://via.placeholder.com/150",
      category: "role-playing",
      genres: ["adventure"],
      playerSupport: ["singleplayer", "LAN", "online competitive"],
      platforms: ["switch"],
    },
    {
      title: "Red Dead Redemption 2",
      price: 35,
      image: "https://via.placeholder.com/150",
      category: "action-adventure",
      genres: ["action", "adventure"],
      playerSupport: ["singleplayer"],
      platforms: ["ps4"],
    },
  ];

  const [games, setGames] = useState<Array<Game>>(allGames);

  const handleSearch = (search?: Search) => {
    if (
      !search ||
      search.value === undefined ||
      search.value === null ||
      typeof search.value !== "string" ||
      (search.value.trim() === "" && !search?.filters)
    ) {
      setGames(allGames);
      alert("TRUE");
    } else {
      alert("FALSE");
      const filteredGames = allGames.filter(
        (game) =>
          (!search.filters ||
            ((search.filters?.genres.length === 0 ||
              search.filters?.genres?.every((genre) =>
                game.genres.includes(genre),
              )) &&
              (search.filters?.playerSupport.length === 0 ||
                search.filters?.playerSupport?.every((playerSupport) =>
                  game.playerSupport?.includes(playerSupport),
                )) &&
              (search.filters?.platforms.length === 0 ||
                search.filters?.platforms?.every((platform) =>
                  game.platforms?.includes(platform),
                )))) &&
          new RegExp(search.value ?? "").test(game.title.toLowerCase()),
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
