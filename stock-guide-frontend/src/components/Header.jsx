function Header() {
  return (
    <header className="header">
      <div className="logo">StockGuide</div>
      <nav className="nav">
        <a href="#lessons">Bài học</a>
        <a href="#start">Bắt đầu</a>
        <a href="#risk">Rủi ro</a>
        <a href="#faq">FAQ</a>
        <a href="#subscribe" className="nav-button">
          Nhận tài liệu
        </a>
      </nav>
    </header>
  );
}

export default Header;
