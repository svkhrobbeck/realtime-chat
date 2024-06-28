import { Header } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Home />
      </main>
    </>
  );
};

export default App;
