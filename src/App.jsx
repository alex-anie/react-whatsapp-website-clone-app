import "./css/navbar.css";
import "./css/home.css";
import "./css/footer.css";

import Navbar from "./Layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
