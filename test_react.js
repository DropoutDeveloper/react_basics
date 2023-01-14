'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }; // Initially setting the liked value to false 
  }

  render() {
    if (this.state.liked) { //Checking if liked is true 
      return 'You liked this.';
    }

    return e(  //creating a button element , and it has a function that when clicked it makes the state of liked to true
      'button',
      { onClick: () => this.setState({ liked: true }) }, 
      'Like'
    );
  }
}

const domContainer = document.querySelector('#test_react');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));