import React, { Component } from 'react';

export default class LinkButton extends Component {
  constructor() {
    super();
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // return this.setState({
    //   liked: !this.state.liked,
    // });
    this.setState(preState => ({
      liked: !preState.liked,
    }));
  }

  render() {
    const { liked } = this.state;
    const text = liked ? 'like' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>

        You {text} this.Click to toggle.
      </div>
    );
  }
}
