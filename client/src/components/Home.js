import React, { useState, useEffect } from "react";

import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import styled from "styled-components";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [operator, setOperator] = useState("text");
  const [functionScore, setFunctionScore] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const [getPlayers] = useLazyQuery(FIND_PLAYERS);

  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    if (!submitted) return;

    // Call the API
    const getPlayers = async () => {
      const players = await fetch(`${BASE_URL}/${operator}/${searchTerm}`)
        .then((resp) => resp.json())
        .then((data) => {
          setPlayers(data);
          setSubmitted(false);
        })
        .catch((e) => {
          console.log(e);
          setPlayers([]);
          setSubmitted(false);
        });
    };

    getPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSubmitted={setSubmitted}
        operator={operator}
        setOperator={setOperator}
        functionScore={functionScore}
        setFunctionScore={setFunctionScore}
      />

      <div className="container">
        <Grid header={searchTerm ? null : "Player Search Results"}>
          {players.map((player) => (
            <Thumb
              key={player._id}
              player={player}
              clickable
              playerID={player._id}
              image={player.player_face_url ? player.player_face_url : ""}
            ></Thumb>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Home;

export const Title = styled.div`
  display: flex-col;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  max-width: 100%;
  margin: 40px 0px auto;
`;
