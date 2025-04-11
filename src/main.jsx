import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from "react-dom/client";
import {App} from "./Components/App/App.jsx";

const reactRoot = createRoot(document.getElementById("root"));
reactRoot.render(<App />);
