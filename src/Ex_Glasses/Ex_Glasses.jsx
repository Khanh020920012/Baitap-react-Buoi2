import React, { Component } from "react";
import { glassArr } from "./data";

export default class Ex_Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGlasses: null
    };
  }

  handleSelectGlasses = (glasses) => {
    this.setState({ selectedGlasses: glasses });
  }

  render() {
    let { selectedGlasses } = this.state;
    return (
      <div className="container display-4">
        <div className="container img__select" style={{ marginBottom: 20 }}>
          <img
            src="./BaiTapGlasses/glassesImage/model.jpg"
            style={{ paddingRight: 200, position: "center", width: "50%" }}
            alt=""
          />
           <img
            src="./BaiTapGlasses/glassesImage/model.jpg"
            style={{ paddingRight: 200, position: "center", width: "50%" }}
            alt=""
          />
          {selectedGlasses && (
            <img
              src={selectedGlasses.url}
              style={{ position: "absolute", top: "20%", left: "25.5%", transform: "translate(-50%, -50%)",width:"15%" }}
              alt=""
            />
          )}
        </div>
        <div>
          <div className="row">
            {glassArr.map((glasses, index) => (
              <button className="small-button" key={index} onClick={() => this.handleSelectGlasses(glasses)}>
                <img
                  src={glasses.url}
                  style={{ width: "100%" }}
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
