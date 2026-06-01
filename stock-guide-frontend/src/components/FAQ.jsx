function FAQ() {
  const faqs = [
    {
      question: "Người mới có nên chơi chứng khoán không?",
      answer:
        "Có thể học và tìm hiểu, nhưng nên bắt đầu với kiến thức cơ bản, số vốn nhỏ và không dùng tiền cần thiết cho sinh hoạt.",
    },
    {
      question: "Có cần biết kế toán để đầu tư không?",
      answer:
        "Không bắt buộc ở giai đoạn đầu, nhưng hiểu các chỉ số cơ bản như doanh thu, lợi nhuận, EPS, P/E sẽ rất hữu ích.",
    },
    {
      question: "Phân tích kỹ thuật có đảm bảo thắng không?",
      answer:
        "Không. Phân tích kỹ thuật chỉ là một công cụ hỗ trợ ra quyết định, không đảm bảo lợi nhuận.",
    },
    {
      question: "Website này có khuyến nghị mã cổ phiếu không?",
      answer:
        "Không. StockGuide chỉ cung cấp kiến thức giáo dục, không đưa ra khuyến nghị mua bán.",
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="section-heading">
        <p>Câu hỏi thường gặp</p>
        <h2>FAQ cho người mới</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
