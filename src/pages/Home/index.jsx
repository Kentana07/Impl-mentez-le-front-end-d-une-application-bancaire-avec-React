import Banner from "../../containers/Banner";
import Promise from "../../containers/Promise";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import './style.css'
function Home() {
  return (
    <>
      <Header />
      <main>
        <Promise />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
export default Home;
