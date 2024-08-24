import "../styles/Header.css";
import UserProfileIcon from "../icons/UserProfileIcon";
import GamesIcon from "../icons/GamesIcon";
import FriendsIcon from "../icons/FriendsIcon";
import type { ReactNode } from "react";
import HomeIcon from "../icons/HomeIcon";

type NavLink = Partial<{
  icon: ReactNode;
  label: ReactNode;
  href: string;
}>;

export default function Header() {
  const navLinks: Array<NavLink> = [
    {
      icon: <GamesIcon width="30px" height="30px" fill="#fff" />,
      label: "Games",
      href: "#games",
    },
    {
      icon: <FriendsIcon width="30px" height="30px" fill="#fff" />,
      label: "Friends",
      href: "#friends",
    },
    {
      icon: <UserProfileIcon fill="#fff" width="40px" height="40px" />,
      href: "#myprofile",
    },
  ];

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <HomeIcon width="50px" height="50px" fill="#fff" />
          <span>AliPlay!</span>
        </a>
      </div>
      <nav className="navbar">
        <ul>
          {navLinks.map(({ icon, label, href }, i) => (
            <li key={i} className="nav-link">
              <a href={href}>
                {icon}
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
