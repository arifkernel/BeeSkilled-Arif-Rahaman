
function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <span className="logo-icon">F</span>
        OOTBALL HUB<span className="logo-dot">.</span>
      </a>

      <nav>
        <a href="#home">HOME</a>
        <a href="#articles">NEWS</a>
        <a href="#about">ABOUT</a>
      </nav>

      <div className="header-label">
        <span className="live-dot"></span>
        THE BEAUTIFUL GAME
      </div>
    </header>
  );
}

export default Header;
