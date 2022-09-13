import { DesignedForFuture } from "./components/DesignedForFuture";
import { Footer } from "./components/Footer";
import { FreeOpen } from "./components/FreeOpen";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { StateOfArt } from "./components/StateOfArt";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <DesignedForFuture />
      <StateOfArt />
      <FreeOpen />
      <Footer />
    </div>
  );
}

export default App;
