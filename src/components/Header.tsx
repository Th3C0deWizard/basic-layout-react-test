import '../styles/Header.css'
import UserProfileIcon from '../icons/UserProfileIcon';
import type { ReactNode } from 'react';

type NavLink = {
  label: ReactNode
  href: string
}

export default function Header() {

  const navLinks: Array<NavLink> = [
    { label: "Games", href: "#games" },
    { label: "Friends", href: "#friends" },
    { label: <UserProfileIcon fill="#fff" width="40px" height="40px" />, href: "#myprofile" },
  ];

  return (
    <header className="header">
      <div className='logo'>
        <a href="/">AliPlay!</a>
      </div>
      <nav className='navbar'>
        <ul>
          {navLinks.map(({ label, href }) => (
            <li className='nav-link'>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <ul>
          <li>

          </li>
        </ul>
      </nav>
    </header>
  )
}
