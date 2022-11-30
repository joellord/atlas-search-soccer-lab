import React from "react";
import MLOGO from "../images/PlayerLogo.png";
import SearchBar from "./SearchBar/SearchBar";
import SearchIcon from "../images/Search.png";
import ScoreBtn from "../images/ScoreBtn.png";
import Selector from "./Selector";
import styled from "styled-components";

const Header = ({
  searchTerm,
  setSearchTerm,
  setPlayers,
  operator,
  setOperator,
  setSubmitted,
  functionScore,
  setFunctionScore,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <Wrapper>
      <Title>
        <h3>Atlas Search Soccer</h3>
      </Title>

      <Content>
        <Logo src={MLOGO} alt="mdb-logo" />
        <InputForm>
          <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setPlayers={setPlayers}
            setSubmitted={setSubmitted}
          />
        </InputForm>
        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSubmit}
          width="80px"
        />
      </Content>
      <Content>
        <SelectorDiv>
          {" "}
          <Selector setOperator={setOperator} operator={operator} />
        </SelectorDiv>

        <Button>
          <img
            src={ScoreBtn}
            alt="search"
            onClick={() => {
              setFunctionScore(!functionScore);
              setSubmitted(true);
              console.log("CLICK", functionScore);
            }}
            width="150px"
          />
        </Button>

      </Content>
      <hr></hr>
    </Wrapper>
  );
};

export default Header;

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
  display: flex-col;
  text-align: center;
  font-size: 40px;
`;
export const Title = styled.div`
  display: flex-col;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  margin: 40px 0px auto;
`;
export const Button = styled.button`
  background: transparent;
  /* border-color: #226030; */
  border: 1px solid #226030;
  box-shadow: 1px 1px 1px 1px slate;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  /* width: 10%; */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  padding: 0 8px;
  margin: 0 auto;
`;

export const InputForm = styled.div`
  width: 70%;
`;
export const SelectorDiv = styled.div`
  width: 30%;
`;

export const Logo = styled.img`
  width: 12%;
`;
