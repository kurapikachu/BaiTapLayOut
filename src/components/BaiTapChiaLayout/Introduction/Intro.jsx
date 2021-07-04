import React, { Component } from "react";
import Content from "./Content/Content";
import Product from "./Product/Product";

export default class Intro extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Content />
          <Product />
        </div>
      </div>
    );
  }
}
