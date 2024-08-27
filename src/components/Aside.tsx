import { type FormEventHandler } from "react";
import SearchIcon from "../icons/SearchIcon";
import "../styles/Aside.css";

import FilterBox from "./FilterBox";
import ClearFiltersIcon from "../icons/ClearFiltersIcon";

type AsideProps = {
  onSearch: (search?: Search) => void;
};

export type Search = {
  value?: string;
  filters?: {
    genres: Array<string | never>;
    playerSupport: Array<string | never>;
    platforms: Array<string | never>;
  };
};

export default function Aside(props: AsideProps) {
  const genres = ["action", "adventure", "survival", "sandbox"];
  const playerSupport = [
    "co-operative",
    "LAN",
    "local & party",
    "MMO",
    "multiplayer",
    "online competitive",
    "singleplayer",
  ];
  const platforms = [
    "windows",
    "macOs",
    "steamOs + linux",
    "ps3",
    "switch",
    "ps4",
  ];

  const getFilterValues = (
    filterKey: string,
    filters: Array<string | never>,
    formElements: HTMLFormControlsCollection,
    search: Search,
  ) => {
    for (const filter of filters) {
      if ((formElements.namedItem(filter) as HTMLInputElement).checked) {
        search.filters = search.filters
          ? search.filters
          : { genres: [], playerSupport: [], platforms: [] };
        search.filters[filterKey].push(filter);
      }
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let search: Search = {};
    const formElements = (e.target as HTMLFormElement).elements;
    search.value = (formElements.namedItem("search") as HTMLInputElement).value;

    getFilterValues("genres", genres, formElements, search);
    getFilterValues("playerSupport", playerSupport, formElements, search);
    getFilterValues("platforms", platforms, formElements, search);

    props.onSearch(search);
  };

  const handleReset: FormEventHandler<HTMLFormElement> = () => {
    const search = undefined;
    props.onSearch(search);
  };

  return (
    <aside className="main__aside">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="searchbar">
          <input type="text" name="search" />
          <button>
            <SearchIcon width="20px" height="20px" fill="#000" />
          </button>
        </div>
        <button className="reset-btn" type="reset">
          Clear Filters
          <ClearFiltersIcon width="20px" height="20px" fill="#000" />
        </button>
        <FilterBox label="Genres" filters={genres} />
        <FilterBox label="Player Support" filters={playerSupport} />
        <FilterBox label="Platforms" filters={platforms} />
      </form>
    </aside>
  );
}
