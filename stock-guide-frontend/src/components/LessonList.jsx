import { lessons } from "../data/lessons";

function LessonList() {
  return (
    <section className="section" id="lessons">
      <div className="section-heading">
        <p>Lộ trình học</p>
        <h2>Các bài học chứng khoán cơ bản</h2>
      </div>
      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <div className="lesson-card" key={lesson.id}>
            <div className="lesson-level">{lesson.level}</div>
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
            <div className="lesson-meta">
              <span>{lesson.duration}</span>
              <button>Học bài này</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LessonList;
