import "./App.css";
import Header from "./components/BaiTapChiaLayout/Header/Header";
import Carousel from "./components/BaiTapChiaLayout/Carousel/Carousel";
import Intro from "./components/BaiTapChiaLayout/Introduction/Intro";
import Footer from "./components/BaiTapChiaLayout/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
