import * as React from "react";
import "../../layout/container.css";
import "../../layout/gameContainer.css";
import "../../layout/primaryBtn.css";
import "../../layout/secondaryBtn.css";
import "../round/round.css";
import NavigationBar from "../../components/NavigationBar";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import OutputBarRound from "../../components/OutputBarRound";
import MakeRoundRobinPairings from "../../Utilities/RoundMaker/roundMaker";
import { TournamentStore } from "../../Contexts/tournamentContext";


const Round = () => {
  const players = [
    {id: 1, name: "Olof"}, // {id: 1, name: "Olof", score: 0, matchHistory: {0 - 0 - 0}},
    {id: 2, name: "Tony"},
    {id: 3, name: "Tim"},
    {id: 4, name: "Kenta"},
    {id: 5, name: "Emma"},
    {id: 6, name: "Doris"},
  
  ];
  const [disable, setDisable] = React.useState(true); //Använd denna hook för att göra knappen klickbar efter att resultaten är ifyllda
  const settingStore = TournamentStore();
  console.log("context från round", settingStore.tournament);

  return (
    <>
      <div className="container">
        <NavigationBar />
        <Divider />
        <div className="gameContainer">
          <div style={{ padding: "1.5rem 0" }}>
            <h3 style={{ margin: "0" }}>Round 1</h3>
          </div>
          <div className="textWrapper">
            <p className="marginBottom">Pairings:</p>
            <div className="flexColumn">
              <p className="marginBottom">Result:</p>
              <p className="wldStyle">W - L - D</p>
            </div>
          </div>
          <div className="playerContainer">

          <MakeRoundRobinPairings players={players} />
          </div>
          <div>

          </div>

          <div className="flexBetween">
            <div>
              <p className="paraStyle">End Tournament</p>
            </div>
            <div>
              <p className="paraStyle">Pause Round</p>
            </div>
          </div>
        </div>
        <div className="btnContainer">
          <Link to="/create-tournament" className="secondaryBtn btnWidth">
            Back
          </Link>
          <button className="primaryBtn btnWidth" disabled={disable}>
            Next Round
          </button>
        </div>
      </div>
    </>
  );
};

export default Round;
