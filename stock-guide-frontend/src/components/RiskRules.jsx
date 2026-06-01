function RiskRules() {
  const rules = [
    "Không dùng toàn bộ tiền tiết kiệm để đầu tư cổ phiếu.",
    "Không vay nợ để đầu tư khi chưa có kinh nghiệm.",
    "Không mua cổ phiếu chỉ vì tin đồn hoặc cảm xúc FOMO.",
    "Luôn xác định trước mức lỗ tối đa có thể chấp nhận.",
    "Đa dạng hóa danh mục, tránh phụ thuộc vào một mã duy nhất.",
  ];

  return (
    <section className="section risk-section" id="risk">
      <div className="section-heading">
        <p>Quản trị rủi ro</p>
        <h2>Nguyên tắc quan trọng trước khi đầu tư</h2>
      </div>
      <div className="risk-box">
        {rules.map((rule, index) => (
          <div className="risk-item" key={index}>
            <span>!</span>
            <p>{rule}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RiskRules;
