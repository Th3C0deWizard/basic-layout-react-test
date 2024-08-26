import { type FormEventHandler } from "react";
import SearchIcon from "../icons/SearchIcon";
import "../styles/Aside.css";

type AsideProps = {
  onSearch: (searchValue: string) => void;
};

export default function Aside(props: AsideProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const searchValue = (
      (e.target as HTMLFormElement).elements.namedItem(
        "search",
      ) as HTMLInputElement
    ).value;

    props.onSearch(searchValue);
  };
  return (
    <aside className="main__aside">
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <input type="text" name="search" />
          <button>
            <SearchIcon width="30px" height="30px" fill="#000" />
          </button>
        </div>
      </form>
    </aside>
  );
}
