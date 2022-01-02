import "./App.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Land from "./land";

const App = () => {

  return (
    <Router>
    <Route path="/" exact component={Land} />
  </Router>
  );
};

export default App;
