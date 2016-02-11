import React, { Component } from 'react';

class TwitterFeed extends Component {
  
  constructor(props) {
    super(props);

    this.state = { feed: '' };
    // TODO: setState using setState()
    this.state.feed;
  }

  render() {
    console.log("TWEETS PROPS", this.props);
    return (
      <div>Tweets Feed Here</div>
    );
  }


}

export default TwitterFeed;