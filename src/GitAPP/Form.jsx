import React, { Component } from "react";
import "./style.css";
class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
  };

  handelForm = async (event) => {
    event.preventDefault();
    if (this.state.name.trim() === "") {
      alert("Please enter a city name.");
    } else {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=be1e7c74611b43d4a1e225006230603&q=${this.state.name}&days="1"&aqi=no&alerts=no`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        this.props.onSubmit(data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  render() {
    return (
      <form onSubmit={this.handelForm}>
        <input
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
          type="text"
          placeholder="City"
        />

        <button>Add</button>
      </form>
    );
  }
}

export default Form;
