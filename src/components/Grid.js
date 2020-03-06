import React, { useState, useEffect } from "react";
import dungeon_room_data from "../data/rooms.js";
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'

function Grid(props) {

  const { width, height } = useWindowSize();

  const [roomNames, setRoomNames] = useState([]);

  useEffect(() => {

    setRoomNames(dungeon_room_data.rooms)

    roomNames.map(mock_room => {
      console.log("room names", mock_room);

    })

  }, [roomNames])


  const Tile = function (x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
  };


  const newTiles = [];

  const NUM_COLS = 10;
  const NUM_ROWS = 10;

  let tiles = new Array(NUM_COLS).fill(0)

  tiles = tiles.map(arr => {
    arr = new Array(NUM_ROWS).fill({ x: 0, y: 0 })
    return arr
  })

  tiles = tiles.map((tile, index1) => {

    return tile.map((newTile, index2) => {

      newTile.x = index1 + 1
      newTile.y = index2 + 1


      return <div className="tile">{newTile.x},{newTile.y} </div>
    })

  })


  const flexGrid = roomNames.map((name, index) => {

    return props.currentRoom === name ?
      <div key={index} id={name} className="tile-selected"> </div>
      :
      <div key={index} id={name} className="tile"> </div>

  })


  return (

    <div className="grid">

      {flexGrid}

      {props.currentRoom === "The Small Rift of Flame" ?

        <div style={{ width: 50 }}>

          <Confetti
            width={width}
            height={height}
          />


        </div>
        :

        null}


    </div>

  );
}

export default Grid;