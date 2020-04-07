import React, { Component } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Submit from "./components/Submit";
import Scores from "./components/Score";
import data from "./data";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      questions: [],
      scores: [],
    };
  }
  componentDidMount() {
    this.newGame();
    console.log("new");
  }
  render() {
    return (
      <div className="App">
        <Header score={this.state.score} newGame={this.newGame} />
        <Game questions={this.state.questions} click={this.click} />
        <Submit onSubmitScore={this.onSubmitScore} />
        <Scores scores={this.state.scores} />
      </div>
    );
  }
  newGame = () => {
    this.setState({ score: 0, questions: [] }, () => {
      this.setState({ questions: this.get4Q() });
    });
  };
  get4Q = () => {
    const questions = [];
    for (let i = 0; i < 4; i++) {
      let question = this.get1Q();
      while (questions.includes(question)) {
        question = this.get1Q();
      }
      questions.push(question);
    }
    return questions;
  };
  get1Q = () => {
    const index = this.getRandomInt(data.questions.length);
    return data.questions[index];
  };
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  click = (e, question) => {
    if (e.target.value === `${question.answer}`) {
      e.target.style["background-color"] = "green";
      e.target.disabled = true;
      this.setState({ score: this.state.score + 1 });
    } else {
      e.target.style["background-color"] = "red";
      e.target.disabled = true;
    }
  };
  onSubmitScore = (e) => {
    e.preventDefault();
    this.state.scores.push({
      name: e.target.name.value,
      score: this.state.score,
    });
    e.target.reset();
    this.setState({ scores: this.state.scores });
    this.newGame();
  };
}
