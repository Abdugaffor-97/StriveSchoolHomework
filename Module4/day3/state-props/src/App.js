import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MvNav";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <WarningSign text="Aaaaaaaaaaaaaaaaaaaaa" />
      <MyBadge text="some text" color="danger" />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
