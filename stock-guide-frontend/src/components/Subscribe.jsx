function Subscribe() {
  return (
    <section className="subscribe" id="subscribe">
      <h2>Nhận checklist đầu tư cho người mới</h2>
      <p>
        Đăng ký để nhận tài liệu gồm các bước chuẩn bị trước khi bắt đầu đầu tư
        chứng khoán.
      </p>
      <form className="subscribe-form">
        <input type="text" placeholder="Họ và tên" />
        <input type="email" placeholder="Email" />
        <select defaultValue="">
          <option value="" disabled>
            Bạn đang ở mức nào?
          </option>
          <option value="newbie">Mới bắt đầu</option>
          <option value="basic">Đã biết cơ bản</option>
          <option value="experienced">Đã từng đầu tư</option>
        </select>
        <button type="submit">Nhận tài liệu</button>
      </form>
      <small>
        StockGuide không gửi khuyến nghị mua bán cổ phiếu. Nội dung chỉ phục vụ
        học tập.
      </small>
    </section>
  );
}

export default Subscribe;
