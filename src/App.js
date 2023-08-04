import { Component } from "react";
import LeftContainer from "./Components/LeftContainer";
import TopMainContainer from "./Components/TopMainContainer";
import MiddleMainContainer from "./Components/MiddleMainContainer";
import BottumMainContainer from "./Components/BottumMainContainer";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main-page-container">
        <LeftContainer />
        <div className="right-container">
          <TopMainContainer />
          <MiddleMainContainer />
          <BottumMainContainer />
        </div>
      </div>
    );
  }
}
