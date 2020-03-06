import React from 'react';
import { useEffect, useState } from 'react';
import axiosWithAuth from "../../axios/index";
import Character from './Character';

import './grid.styles.scss';

import baseUrl from '../../utils.js';

const COLS = 10;


const Grid = (props) =>  {
  let gridArray = [
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

    let [rooms, setRooms] = useState([]);

    useEffect(() => {
      axiosWithAuth()
      .get(`${baseUrl}/api/adv/rooms/`)
        .then(res => {
          setRooms(res.data);
        })
    }, [])


    const addRoom = (room) => {
      let x = room.x * 2;
      let y = room.y * 2;
      try {
        if (!gridArray[y][x]) {
          gridArray[y][x] = room;
          // paths
          if (room.e_to > 0 ){ 
            let px = x + 1;
            gridArray[y][px] = 'path';
          }
          if (room.s_to > 0 ) {
            let py = y+1;
            gridArray[py][x] = 'path';
          }
          if (room.w_to > 0 ){ 
            let px = x - 1;
            gridArray[y][px] = 'path';
          }
          if (room.n_to > 0 ) {
            let py = y -1;
            gridArray[py][x] = 'path';
          }
          // walls
          if (room.e_to === 0 ){ 
            let px = x + 1;
            gridArray[y][px] = 'wall';
          }
          if (room.s_to === 0 ) {
            let py = y + 1;
            gridArray[py][x] = 'wall';
          }
          if (room.w_to === 0 ){ 
            let px = x - 1;
            gridArray[y][px] = 'wall';
          }
          if (room.n_to === 0 ) {
            let py = y -1;
            gridArray[py][x] = 'wall';
          }
          return true;
        }
        return false;
      } catch(err) {
        return false
      }
    }


    //const rooms = props.rooms;
    rooms.forEach(room => {
      addRoom(room);
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
          gridArray.map((row, rowID) => (
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
        <Character 
          direction={props.direction} 
          maze={gridArray}
          dx={props.x}
          dy={props.y}
        />
      </div>
    )

}

export default Grid;
