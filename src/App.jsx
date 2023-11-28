import "./App.css";
import RouterConfig from "./config/Router-Config";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <RouterConfig></RouterConfig>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
