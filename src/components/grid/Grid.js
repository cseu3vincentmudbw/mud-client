import React from 'react';

import './grid.styles.scss';

import DATA from './data';

const COLS = 10;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.gridArray = [
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
      Array(COLS*2).fill(null),
    ]
    this.rooms = DATA.slice(0, 100);
  }


  addRoom = (room) => {
    let x = room.x * 2;
    let y = room.y * 2;
    try {
      if (!this.gridArray[x][y]) {
        this.gridArray[x][y] = room;
        // paths
        if (room.e_to > 0 ){ 
          let px = x + 1;
          this.gridArray[px][y] = 'path';
        }
        if (room.s_to > 0 ) {
          let py = y+1;
          this.gridArray[x][py] = 'path';
        }
        if (room.w_to > 0 ){ 
          let px = x - 1;
          this.gridArray[px][y] = 'path';
        }
        if (room.n_to > 0 ) {
          let py = y -1;
          this.gridArray[x][py] = 'path';
        }
        // walls
        if (room.e_to === 0 ){ 
          let px = x + 1;
          this.gridArray[px][y] = 'wall';
        }
        if (room.s_to === 0 ) {
          let py = y + 1;
          this.gridArray[x][py] = 'wall';
        }
        if (room.w_to === 0 ){ 
          let px = x - 1;
          this.gridArray[px][y] = 'wall';
        }
        if (room.n_to === 0 ) {
          let py = y -1;
          this.gridArray[x][py] = 'wall';
        }
        return true;
      }
      return false;
    } catch(err) {
      console.log(err.message)
      return false
    }
  }


  render() {
    //const rooms = this.props.rooms;
    this.rooms.forEach(room => {
      this.addRoom(room);
    })

    const spriteClass = (room) => {
      if (room !== null) {
        if (typeof room == 'object') return 'house';
        if (typeof room == 'string') {
          if (room === 'path') return 'path';
          if (room === 'wall') return 'canal';
        }
      }
      return 'canal';
    }


    return (
    <div className="grid-wrapper">
      <table className="grid-table">
      {
        this.gridArray.map((row, rowID) => (
        <tr> 
          {
            row.map((room, roomInd) => (
              <td 
                className={`sprite ${spriteClass(room)}`}
                data-x={roomInd} data-y={rowID}>
              </td>
            ))
          }
        </tr>
        ))
      }
      </table>
    </div>
    )
  }

}

export default Grid;
