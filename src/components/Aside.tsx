import { FormEventHandler } from "react";
import SearchIcon from "../icons/SearchIcon";
import "../styles/Aside.css";

export default function Aside() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <aside className="main__aside">
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <input type="text" />
          <button>
            <SearchIcon width="30px" height="30px" fill="#000" />
          </button>
        </div>
      </form>
    </aside>
  );
}
