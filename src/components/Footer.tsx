import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/src/assets/aliPlay__logo.jpeg" alt="aliPlay Logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="order">Order</a>
        </li>
        <li>
          <a href="blog">Blog</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
      <p>Copyright 2024 by AliPlay All rights reserved</p>
    </footer>
  );
}
