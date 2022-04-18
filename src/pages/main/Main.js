import React from "react";
import "./main.css";
import Background from "../../components/Background/Background";
import Symbol from "../../components/Symbol/Symbol";
import Texto from "../../components/textos/Texto";
import Button from "../../components/Buttons/Button";
import Seeproject from "../../components/seeproject/Seeproject";

function Main() {
  return (
    <div className="main">
      <Background />
      <Symbol />
      <Texto />
      <div className="orde-button">
       <Button />
        <Seeproject />
      </div>
    </div>
  );
}

export default Main;
