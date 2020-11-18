import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MvNav";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
