import React, { Component } from "react";
import Axios from "axios";

import { LeftColumn } from "./Column/Left/LeftColumn";
import { RightColumn } from "./Column/Right/RightColumn";

class Container extends Component {
  state = {
    productItem: []
  };
  componentDidMount = async () => {
    const resProductionItem = await Axios.get(
      "http://localhost:3000/api/products/"
    ).catch(error => {
      console.log(error);
      return error;
    });
    const { data = null } = resProductionItem;
    if (!data) {
      return;
    }
    this.setState({ productItem: data });
    return;
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftColumn />
          <RightColumn productItem={this.state.productItem} />
        </div>
      </div>
    );
  }
}

export default Container;
