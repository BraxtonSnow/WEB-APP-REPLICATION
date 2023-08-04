import { Component } from "react";

export default class BottumMainContainer extends Component {
  render() {
    return (
      <div className="bottum-main-container">
        <div className="bottum-button-container">
          <button className="bottum-button">Button</button>
        </div>
        <div className="the-bottum-icon-container">
          <div className="bottum-icon-container">Social Media Icon</div>
        </div>
        <div className="the-bottum-content-container">
          <div className="bottum-content-container">Copyright</div>
        </div>
      </div>
    );
  }
}
