import React, { Component } from "react";
import Cards from "./Cards";
import Form from "./Form";

// const testdata = [
//   {
//     id: 1,
//     name: "Dan Abramov",
//     avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
//     company: "Facebook",
//   },
//   {
//     id: 2,
//     name: "Sophie Alpert",
//     avatar_url: "https://avatars.githubusercontent.com/u/6820?v=4",
//     company: "Facebook",
//   },
//   {
//     id: 3,
//     name: "Ryan Florence",
//     avatar_url: "https://avatars.githubusercontent.com/u/100200?v=4",
//     company: "React Training",
//   },
// ];
class GitHubAPP extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    Countries: [],
  };

  addNewCountry = (countirs) => {
    this.setState((prevState) => ({
      Countries: [...prevState.Countries, countirs],
    }));
  };

  delete = (card) => {
    const nameToDelet = card.location.name;
    const newList = this.state.Countries.filter((item) => {
      return !(item.location.name === nameToDelet);
    });

    this.setState({
      Countries: newList,
    });
  };

  render() {
    return (
      <div>
        <div class="title">{this.props.title}</div>
        <div class="container">
          <Form onSubmit={this.addNewCountry} />
        </div>

        <Cards Countries={this.state.Countries} deleteCard={this.delete} />
      </div>
    );
  }
}

export default GitHubAPP;
