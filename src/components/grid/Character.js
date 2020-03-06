import React from 'react';

import character from "../../assets/character.png"

import './character.styles.scss';

class Character extends React.Component {
  constructor(props){
    super(props);
    this.STEP = 40;
    this.state = { dx: 0, dy: 0}
  }

  canMove = (dx, dy) => {
    let maze = this.props.maze;
    let x = dx * 2;
    let y = dy * 2;
    let room = maze[x][y];
    debugger;
    if ((typeof room === 'string' && room === 'path') || typeof room === 'object'){
      return true;
    }
    return false;
  }

  render() {
    let dx = this.state.dx;
    let dy = this.state.dy;
    let direction = this.props.direction;
    const maze = this.props.maze;
    if (direction === 'w') {
      dx = dx - 1;
      if (dx >= 0 && dx < 9){
        if (this.canMove(dx, dy)) {
          this.setState({...this.state, dx});
        }
      }
    }

    if (direction === 'e') {
      dx = dx + 1;
      if (dx >= 0 && dx < 9){
        if (this.canMove(dx, dy)) {
          this.setState({...this.state, dx});
        }
      }
    }


    if (direction === 's') {
      debugger
      dy = dy + 1;
      if (dy >= 0 && dy < 9){
        if (this.canMove(dx, dy)) {
          this.setState({dx: dx, dy: dy});
        }
      }
    }

    if (direction === 'n') {
      dy = dy - 1;
      if (dy >= 0 && dy < 9){
        if (this.canMove(dx, dy)) {
          this.setState({...this.state, dy});
        }
      }
    }

    dx = dx * this.STEP;
    dy = dy * this.STEP;
    return (
    <div className="character">
      <img
          src={character}
          key="key"
          alt="character"
          style={{ top: dy + 'px', left: dx + 'px'}}
          >
      </img>
    </div>
    )
  }
}

export default Character;
