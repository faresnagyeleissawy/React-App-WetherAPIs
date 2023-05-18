import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  deletecard = async () => {
    console.log(this.props["location"]["name"]);
    await this.props.delete(this);
  };
  render() {
    if (this.props["location"]["name"]);

    return (
      <div>
        <div class="card">
          <h2 class="card-title">{this.props["location"]["name"]}</h2>
          <div class="card-body">
            <h3>Tem: {this.props["current"]["temp_c"]}</h3>
            <p>Region: {this.props["location"]["region"]}</p>
            <p>Country: {this.props["location"]["country"]}</p>
            <p>Latitude: {this.props["location"]["lat"]}</p>
            <p>Longitude: {this.props["location"]["lon"]}</p>
            <p>Timezone:{this.props["location"]["tz_id"]}</p>
            <p>localtime:{this.props["location"]["localtime"]}</p>
          </div>
          <button onClick={this.deletecard}>clear</button>
        </div>
      </div>
    );
  }
}
//////
export default Card;
