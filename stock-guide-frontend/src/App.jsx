import Header from "./components/Header";
import Hero from "./components/Hero";
import LessonList from "./components/LessonList";
import GettingStarted from "./components/GettingStarted";
import RiskRules from "./components/RiskRules";
import FAQ from "./components/FAQ";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LessonList />
      <GettingStarted />
      <RiskRules />
      <FAQ />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
