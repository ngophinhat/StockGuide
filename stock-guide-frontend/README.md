# StockGuide Frontend

Website hướng dẫn chứng khoán cơ bản cho người mới bắt đầu.

## Tech Stack

- **Frontend**: React + Vite
- **Backend (sau này)**: Node.js API + PostgreSQL
- **CI/CD**: GitHub Actions
- **Deploy**: Render

## Chạy local

```bash
npm install
npm run dev
```

Mở: http://localhost:5173

## Build production

```bash
npm run build
npm run preview
```

## Deploy lên Render

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

## Cấu trúc thư mục

```
stock-guide-frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LessonList.jsx
│   │   ├── GettingStarted.jsx
│   │   ├── RiskRules.jsx
│   │   ├── FAQ.jsx
│   │   ├── Subscribe.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── lessons.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── ci.yml
├── index.html
├── package.json
└── vite.config.js
```

## Disclaimer

Nội dung chỉ nhằm mục đích giáo dục, không phải khuyến nghị mua bán cổ phiếu.
