import "./App.css";
import Card from "./Pages/Card";
import Chat from "./Pages/Chat"; //i tried to make better chat
import Hero from "./Pages/Hero";
import Relief from "./Pages/Relief";
import Twitter from "./Pages/Twitter";

let classesForAllPages = "flex-shrink-0 snap-start";

function App() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col snap-y snap-mandatory scroll-container scroll-smooth">
      <Hero className={classesForAllPages} snap-start />
      <Relief className={classesForAllPages} />
      <Card className={classesForAllPages} snap-start />
      <Chat className={classesForAllPages} snap-start />
      <Twitter className={classesForAllPages} snap-start />
    </div>
  );
}

export default App;
