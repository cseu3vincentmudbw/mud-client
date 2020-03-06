/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Card, Message } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import axiosWithAuth from "../../axios/index";
//import Map from "../../components/Map";
import Confetti from 'react-confetti';

// import World from "../../components/World";
import Grid from '../../components/grid/Grid';

import {
  useWindowSize
} from '@react-hook/window-size'


import './dashboard.styles.scss';

// const baseUrl = `https://legend-mud.herokuapp.com` 
const baseUrl = `http://127.0.0.1:8000` 

function Dashboard() {

  const [moveErrorMsg, setMoveErrorMsg] = useState();
  const [direction, setDirection] = useState(null);
  const [moveInfo, setMoveInfo] = useState({
    uuid: "",
    name: "",
    title: "",
    description: "",
    players: [],
    error_msg: ""
  })

  const { width, height } = useWindowSize();

  useEffect(() => {

    axiosWithAuth().get(
      `${baseUrl}/api/adv/init`
    )
      .then(res => {
        console.log("init res", res.data);
        setMoveInfo(res.data);
        setMoveErrorMsg(res.data.error_msg);
      })
      .catch(err => {
        console.log(err.message)
      })

  }, []);


  const Move = (dir) => {
    axiosWithAuth()
      .post(
        `${baseUrl}/api/adv/move/`, { direction: `${dir}` }
      )
      .then(res => {
        setMoveInfo(res.data);
        setDirection(dir);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  // const handleKeyPress = (e) => {
  //   debugger
  //   e = e || window.event;
  //   if (e.keyCode == '38') {
  //     Move("n");
  //     setDirection('n');
  //   }
  //   else if (e.keyCode == '40') {
  //     Move("s");
  //     setDirection('s');
  //   }
  //   else if (e.keyCode == '37') {
  //     Move("w");
  //     setDirection('w');
  //   }
  //   else if (e.keyCode == '39') {
  //     Move("e");
  //     setDirection('s');
  //   }
  //   else if (e.keyCode == '78') {
  //     Move("n");
  //     setDirection('n');
  //   }
  //   else if (e.keyCode == '83') {
  //     Move("s")
  //     setDirection('s');
  //   }
  //   else if (e.keyCode == '69') {
  //     Move("e");
  //     setDirection('e');
  //   }
  //   else if (e.keyCode == '87') {
  //     Move("w");
  //     setDirection('w');
  //   }
  // }


  return (
    <div className="dashboard-container" key="key">
      <Header />

      <div className="dashboard-div" key="key">

        <div className="dashboard-grid-maze">
          <Grid direction={direction}/>
          <div className="confetti">
            {
              moveInfo.title === "The Small Rift of Flame" ?
              <div style={{ width: 50 }}>
                <Confetti
                  width={width}
                  height={height}
                />
              </div>
              :
              null
            }
          </div>

        </div>{/*end maze*/}

        <div className="right-half">

          <Card className="rooms" style={{ overflow: 'auto' }}>
            <Card.Content>
              <h3>
                {moveInfo.title}
              </h3>

              <Card.Description>

                <div className="description">
                  {moveInfo.description}
                </div>
              </Card.Description>

            </Card.Content>

          </Card>

          {/*</div>*/}

          {/*error msg*/}

          {moveInfo.error_msg && moveInfo.error_msg.length > 0 ?
            <Message className="error-msg" color='red'>{moveInfo.error_msg}</Message>
            :
            null}


          {/*<div className = "players">  */}

          <Card className="players" style={{ overflow: 'auto' }}>
            <Card.Content>
              <h3>
                Players
              </h3>

              <Card.Description>


                {
                  moveInfo.players.length === 0 ? <p>Oh No! You are alone here!!</p> :
                    <>
                      {moveInfo.players.map(p => {
                        return (<>{p}, </>) //this needs to be in a scrolling text box
                      })}
                    </>
                }
              </Card.Description>

            </Card.Content>

          </Card>

          <Card className="directions">
            <Card.Content>


              <div className="north"> <button onClick={() => Move("n")}>NORTH</button> </div>

              <div className="east-west">
                <button className="west-btn" onClick={() => Move("w")}>WEST</button>
                <button onClick={() => Move("e")}>EAST</button>

              </div>

              <div className="south">
                <button onClick={() => Move("s")}>SOUTH</button>

              </div>

            </Card.Content>

          </Card>

        </div>

      </div>


    </div>);


} 

export default Dashboard;
