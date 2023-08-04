import { Component } from "react";

export default class LeftContainer extends Component {
  render() {
    return (
      <div className="main-left-container">
        <div className="top-image-left-container">Logo</div>
        <div>
          <button className="button 1">button</button>
          <button className="button 2">button</button>
          <button className="button 3">button</button>
          <button className="button 4">button</button>
          <button className="button 5">button</button>
        </div>
        <div className="bottum-image-left-container">Logo</div>
      </div>
    );
  }
}
