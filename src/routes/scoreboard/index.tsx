import * as React from "react";
import "../../layout/container.css";
import "../../layout/gameContainer.css";
import "../../layout/primaryBtn.css";
import "../../layout/secondaryBtn.css";
import "../scoreboard/scoreboard.css";
import NavigationBar from "../../components/NavigationBar";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import OutputbarScoreBoard from "../../components/OutputBarScoreBoard";
import { TournamentStore } from "../../Contexts/tournamentContext";
import { Grid } from "@mui/material";




const Scoreboard = () => {

  const settingContext = TournamentStore();
  const players = settingContext.playerList;
//  console.log(players);

return (
  <div className="container">
    <NavigationBar />
    <Divider />
    <div className="gameContainer">
      <div className="headingWrapper">
        <h3 className="noMargin">Scoreboard</h3>
      </div>
      <Grid container direction="row" className="textContainer">
        <Grid item xs={6.5} md={6.7} xl={6.8}></Grid>
        <Grid item xs={2.5} md={2.3} xl={2.2}><p className="ptsStyle">Points</p></Grid>
        <Grid item xs={3} className="wld"><p>W-L-D</p></Grid>
      </Grid>
      <div className="scoreContainer">
        {players.map((e) => (
       
          <OutputbarScoreBoard player= {e.name}
                               totalScore= {e.score} 
                               wins={e.matchHistory.win}
                               losses={e.matchHistory.loss}
                               draws={e.matchHistory.draw} />

        ))}
      
      </div>
      <div className="paraContainer">
        <p className="paraStyle">End Tournament</p>
      </div>
    </div>
    <div className="buttonContainer">
      <Link to="/create-tournament" className="secondaryBtn buttonWidth">
        Back
      </Link>
      <Link
        to="/current-tournament/round"
        className="primaryBtn buttonWidth"
      >
        Next Round
      </Link>
    </div>
  </div>
);
}; 

export default Scoreboard;
