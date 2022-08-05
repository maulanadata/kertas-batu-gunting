import React, { Component, useState } from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
import "antd/dist/antd.css";

import Player from "../player";
const { Title } = Typography;

class Controller extends Component {
  state = {
    playerOne: {
    active: true,
    weapon: "",
    status: ""
    },
    playerTwo: {
    active: false,
    weapon: "",
    status: ""
    }
  };

  weaponUpdate = (player, weapon) => {
    this.setState({
      [player]: {
      ...this.state[player], weapon: weapon}
    });

    if (player == "playerTwo") {
      this.resultHandler();
    } else {
      this.toggleActive();
    }
  };

  toggleActive = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        playerOne: {...prevState.playerOne, active: !prevState.playerOne.active},
        playerTwo: {...prevState.playerTwo, active: !prevState.playerTwo.active}
      };
    });
  };
  
  resultHandler = () => {
    this.setState(prevState => {
      let [s1, s2] = this.deciderHelper(
        prevState.playerOne.weapon,
        prevState.playerTwo.weapon
      );
      return {
        ...prevState,
        playerOne: {...prevState.playerOne, status: s1},
        playerTwo: {...prevState.playerTwo, status: s2}
      };
    });
    this.toggleActive();
  };

  deciderHelper = (p1, p2) => {

    if (p1 == p2){
      return ["d", "d"]
    }
    else{
      if ((p1 == "r" && p2 == "s") ||
          (p1 == "p" && p2 == "r") ||
          (p1 == "s" && p2 == "p")
         ) {
        return ["w", "l"];
      }
      else{
        return ["l", "w"];
      }
    }

    const choices = ["r", "p", "s"];
    const [computedSelected, setComputedSelected] = useState("");
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    setComputedSelected(choices[computerChoiceIndex]);

  };

  render() {
    return (
    <Row justify="space-around" align="middle">
      <Col className="gutter-row" xs={15} sm={15} md={5} lg={5}>
        <Title level={3}>Kamu</Title>
        <Player
          active={this.state.playerOne.active}
          weaponUpdate={weapon => this.weaponUpdate("playerOne", weapon)}
          weapon={this.state.playerOne.weapon}
          status={this.state.playerOne.status}
        />
      </Col>
  
      <Col className="gutter-row" xs={15} sm={15} md={5} lg={5}>
        <Title level={3}>Komputer</Title>
        <Player
          active={this.state.playerTwo.active}
          weaponUpdate={weapon => this.weaponUpdate("playerTwo", weapon)}
          weapon={this.state.playerTwo.weapon}
          status={this.state.playerTwo.status}
        />
      </Col>
    </Row>
    );
  }
}
  
export default Controller;
  