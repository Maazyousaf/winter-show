import "./App.css";
import Home from "./modules/Home";
import MobileHome from "./modules/Home/MobileHome";

function App() {
  return (
    <div className="sm:bg-black">
      <Home />
      <MobileHome />
    </div>
  );
}

export default App;
