import React from 'react';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
    };
  }

  render(){
    // return <h1>I am a square</h1>
    return(
      <button
        className ="square"
        onClick={() => this.setState({value: 'X'})}
        >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
