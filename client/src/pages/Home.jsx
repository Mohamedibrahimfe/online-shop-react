import "../styles/home.css";
import Banner from "../components/Home/banner/Banner";
import About from "../components/Home/about/About";
import LatestProducts from "../components/Home/latestproduct/LatestProducts";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <LatestProducts />
      <About />
    </div>
  );
}
