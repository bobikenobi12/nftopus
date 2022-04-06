import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import { Explore } from "./components/Explore";
import { About } from "./components/About";
import { WalletBalance } from "./components/WalletBalance";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/wallet" element={<WalletBalance />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);