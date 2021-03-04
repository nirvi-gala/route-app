import HomeRoutes from "./routes";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <HomeRoutes />
    </Router>
  );
}

export default App;
