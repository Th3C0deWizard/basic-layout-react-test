import "../styles/Header.css";
import UserProfileIcon from "../icons/UserProfileIcon";
import ShoppingIcon from "../icons/ShoppingIcon";
import type { ReactNode } from "react";

type NavLink = {
  label: ReactNode;
  href: string;
};

type HeaderProps = {
  openModal: () => void;
};

export default function Header(props: HeaderProps) {
  const navLinks: Array<NavLink> = [
    { label: "Games", href: "#games" },
    { label: "Friends", href: "#friends" },
    {
      label: <UserProfileIcon fill="#fff" width="40px" height="40px" />,
      href: "#myprofile",
    },
    {
      label: (
        <ShoppingIcon
          width="40px"
          height="40px"
          className=""
          onClick={props.openModal}
        />
      ),
      href: "#cart",
    },
  ];

  return (
    <header className="header">
      <div className="logo">
        <a href="/">AliPlay!</a>
      </div>
      <nav className="navbar">
        <ul>
          {navLinks.map(({ label, href }) => (
            <li className="nav-link">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
