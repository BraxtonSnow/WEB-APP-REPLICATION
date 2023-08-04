import { Component } from "react";

export default class MiddleMainContainer extends Component {
  render() {
    return (
      <div className="middle-main-container">
        <div className="main-content">
          <div>Main Content</div>
        </div>
        <div className="top-content">
          <div className="content">Main Content</div>
          <div className="content">Image</div>
        </div>
        <div className="bottum-content">
          <div className="content">Image</div>
          <div className="content">Main Content</div>
        </div>
        <div className="main-content">
          <div>Main Content</div>
        </div>
      </div>
    );
  }
}
