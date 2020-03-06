import React, { useEffect, useState } from 'react';
import { LineSeries } from "react-vis";
import mock_room_data from "../data/data.js";


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  CustomSVGSeries
} from 'react-vis';

function ReactVis(props) {

  const [mockRoomCoordinates, setMockRoomCoordinates] = useState([]);

  const [mockRoomData, setMockRoomData] = useState([]);

  const mapXYCoordinates = [];

  useEffect(() => {

    setMockRoomCoordinates(
      mock_room_data.rooms.map((room) => ({
        pk: room.pk,
        x: room.fields.x,
        y: room.fields.y
      }))
    )

    setMockRoomData(
      mock_room_data.rooms.map((room) => ({
        pk: room.pk,
        title: room.fields.title,
        x: room.fields.x,
        y: room.fields.y
      }))
    )

  }, [])


  mockRoomData.map(mock_room =>
    console.log("mock room data", mock_room)
  )


  return (
    <div>

      <XYPlot margin={50} xDomain={[0, 10]} yDomain={[0, 10]} width={500} height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <LineSeries strokeWidth={1} />
        <XAxis />
        <YAxis />

        {
          mockRoomCoordinates.map(mock_room => {
            //console.log("mockRoomData", mockRoomData)
            //console.log("mock room data", mock_room);
           return  mapXYCoordinates.push(mock_room);
          })
        }

        <CustomSVGSeries
          current={1}
          highlight="#1b00ff"
          animation
          style={{ stroke: 'red', fill: 'orange' }}
          className="custom-marking"
          customComponent={(row, positionInPixels) => {
            return (
              <g className="inner-inner-component">
                <circle cx="0" cy="0" r={row.size || 10} fill="green" />
                <text x={0} y={0}>
                  <tspan x="0" y="1em">{`y: ${row.y}`}</tspan>
                  <tspan x="0" y="0">{`x: ${row.x}`}</tspan>
                </text>
              </g>
            );
          }}

          data={mapXYCoordinates}

        />

      </XYPlot>



    </div>
  );
}

export default ReactVis;