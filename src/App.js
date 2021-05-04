import "./style/App.css";

import AwosomeAnimals from "./components/AwosomeAnimals";
import LikeCounter from "./components/LikeCounter";
import ArticleList from "./components/ArticleList";
function App() {
  return (
    <div className="App">
      <main>
        <LikeCounter />
        <AwosomeAnimals />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
