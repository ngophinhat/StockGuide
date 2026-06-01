function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="tagline">Học chứng khoán từ con số 0</p>
        <h1>Hiểu thị trường trước khi xuống tiền</h1>
        <p className="hero-description">
          StockGuide giúp người mới bắt đầu học kiến thức nền tảng về chứng
          khoán, cách đọc bảng giá, phân tích cơ bản, phân tích kỹ thuật và
          quản trị rủi ro.
        </p>
        <div className="hero-actions">
          <a href="#lessons" className="primary-button">
            Xem bài học
          </a>
          <a href="#subscribe" className="secondary-button">
            Nhận checklist miễn phí
          </a>
        </div>
        <p className="disclaimer">
          Nội dung chỉ nhằm mục đích giáo dục, không phải khuyến nghị mua bán cổ
          phiếu.
        </p>
      </div>
      <div className="market-card">
        <h3>Bài học nổi bật</h3>
        <div className="market-row">
          <span>Chủ đề</span>
          <strong>Quản trị rủi ro</strong>
        </div>
        <div className="market-row">
          <span>Mức độ</span>
          <strong>Cần thiết</strong>
        </div>
        <div className="market-row">
          <span>Thời lượng</span>
          <strong>25 phút</strong>
        </div>
        <button>Tìm hiểu ngay</button>
      </div>
    </section>
  );
}

export default Hero;
