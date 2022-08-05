import React, { useMemo, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Action() {
  const choices = ["rock", "paper", "scissors"];
  const [selected, setSelected] = useState("");
  const [computerSelected, setComputerSelected] = useState("");
  const [selectedScore, setSelectedScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const play = () => {
    if (!selected) {
      return ;
    }
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    setComputerSelected(choices[computerChoiceIndex]);
  };

  const result = useMemo(() => {
    if (computerSelected === selected) {
      return `Draw`;
    } else {
      if (
        (computerSelected === "rock" && selected === "scissors") ||
        (computerSelected === "paper" && selected === "rock") ||
        (computerSelected === "scissors" && selected === "paper")
      ) {
        setComputerScore(computerScore + 1)
        return "Computer won";
        
      }
      setSelectedScore(selectedScore + 1)
      return "You won";
    }
  }, [computerSelected, selected]);

  return (
    <div class="row mt-4 justify-content-center">

      <div class="col-lg-3 d-flex align-items-stretch">
        <div class="card text-center" style={{width: "300px"}}>
          <div class="card-header mb-2"> You </div>
          <div class="card-body">
            <button class="btn btn-primary mb-2" onClick={() => setSelected("rock")}>Rock</button> <br />
            <button class="btn btn-primary me-4" onClick={() => setSelected("paper")}>Paper</button>
            <button class="btn btn-primary" onClick={() => setSelected("scissors")}>Scissors</button>
          </div>
          <div class="card-footer text-muted"> {selected} </div>
        </div>
  
      </div>
      
      <div class="col-lg-3 d-flex align-items-stretch">
        <div class="card text-center" style={{width: "300px"}}>
          <div class="card-header mb-2"> Result </div>
          <div class="card-body">
            <button class="btn btn-primary" onClick={play}>play</button>
            <div className="mt-4"> Score : {selectedScore} - {computerScore} </div>
          </div>
          <div class="card-footer text-muted" id="hasil"> {result} </div>
        </div>
      </div>
      
      <div class="col-lg-3 d-flex align-items-stretch">
        <div class="card text-center" style={{width: "300px"}}>
          <div class="card-header mb-2"> Computer </div>
          <div class="card-body">
            <button class="btn btn-primary mb-2 disabled">Rock</button> <br />
            <button class="btn btn-primary me-4 disabled">Paper</button>
            <button class="btn btn-primary disabled">Scissors</button>
          </div>
          <div class="card-footer text-muted"> {computerSelected} </div>
        </div>
      </div>
    </div>
    
  );
}

export default Action;
