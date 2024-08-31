import "./App.css";
import Card from "./Pages/Card";
import Chat from "./Pages/Chat"; //i tried to make better chat
import Hero from "./Pages/Hero";
import Twitter from "./Pages/Twitter";

function App() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col snap-y snap-mandatory scroll-container scroll-smooth">
      <Hero className="flex-shrink-0 snap-start" snap-start />
      <Card className="flex-shrink-0 snap-start" snap-start />
      <Chat className="flex-shrink-0 snap-start" snap-start />
      <Twitter className="flex-shrink-0 snap-start" snap-start />
    </div>
  );
}

export default App;
