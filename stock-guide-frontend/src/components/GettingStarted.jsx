function GettingStarted() {
  const steps = [
    {
      title: "Bước 1: Hiểu sản phẩm đầu tư",
      description:
        "Nắm rõ cổ phiếu là gì, vì sao giá cổ phiếu tăng giảm và nhà đầu tư kiếm lợi nhuận bằng cách nào.",
    },
    {
      title: "Bước 2: Học cách đọc thông tin",
      description:
        "Biết cách đọc bảng giá, báo cáo tài chính, tin tức doanh nghiệp và dữ liệu thị trường.",
    },
    {
      title: "Bước 3: Lập kế hoạch vốn",
      description:
        "Xác định số vốn có thể đầu tư, thời gian nắm giữ và mức rủi ro chấp nhận được.",
    },
    {
      title: "Bước 4: Ghi lại quyết định đầu tư",
      description:
        "Theo dõi lý do mua, lý do bán, kết quả và bài học sau mỗi giao dịch.",
    },
  ];

  return (
    <section className="section start-section" id="start">
      <div className="section-heading">
        <p>Bắt đầu</p>
        <h2>Người mới nên học theo thứ tự nào?</h2>
      </div>
      <div className="step-list">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GettingStarted;
