import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";

function App() {
  // Fetch tattoos data
  const tattooElements = tattoos.map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} />;
  });

  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">{tattooElements}</div>
    </div>
  );
}

export default App;
