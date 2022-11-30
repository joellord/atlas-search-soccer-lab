import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px;
  position: relative;
  border-radius: 10px;
  background-color: black;
  width: 300px;

  margin-bottom: 30px;
  max-height: 700px;
  overflow: auto;
  text-align: center;
  transition: all 0.4s ease-in-out;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;
  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 200px 50px darkgreen;
    box-shadow: 0px 0px 200px 50px rgba(6, 22, 33, 0.7);
  }
`;
export const TraitLine = styled.div`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;

  h2 {
    font-weight: 400;
    color: #7fff00;
  }
  h3 {
    font-weight: 400;
    color: #0ad05b;
  }

  h4 {
    font-weight: 300;
  }
  h1 {
    color: #7fff00;
  }
`;

export const ScoreBadge = styled.div`
  /* position: absolute; */
  background: red;
  opacity:1.0;
  padding: 6px;
  color: white;
  font-size: 20px;
  font-weight:bold;
  top: 0px;
  border-radius: 20px;
  height: 28px;
  width: 60%;
  margin: 0 auto;
  border: 3px solid black;
  shadow: 
  z-index: 10;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.3);
    box-shadow: 0px 0px 200px 50px green;
    box-shadow: 0px 0px 200px 50px rgba(6, 22, 33, 0.7);
  }
`;
export const TraitImage = styled.img`
  width: 40px;

  object-fit: contain;
`;
export const Image = styled.img`
  maxwidth: 100px;
  transition: all 0.3s;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  /* :hover {
    opacity: 0.8;
  } */

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
