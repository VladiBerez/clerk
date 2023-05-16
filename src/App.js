import Logo from "./components/Logo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import EmailSubscribe from "./components/EmailSubscribe";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Logo />
        <Header />
        <Hero />
        <Navbar />
        <div className="bg-[#F5F5F8] md:rounded-lg">
          <EmailSubscribe />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
