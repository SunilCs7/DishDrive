import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Navbar />
        {/* Outlet acts as a placeholder for the current route's component */}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
