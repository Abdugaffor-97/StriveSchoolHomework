import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/MyNav";
import Footer from "./components/MyFooter";
import JumbotronTagline from "./components/Welcome";
import LatestBooks from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <NavBar />
      <JumbotronTagline />
      <LatestBooks />
      <Footer />
    </div>
  );
}

export default App;
