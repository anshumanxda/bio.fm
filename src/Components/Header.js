import React from "react";
import styled from "styled-components";

function Header(props) {
  console.log(props.bioFmUsername, props.avatarLink);
  return (
    <StyledHead>
      <StyledImg src={props.avatarLink} alt="avatar" />
      <div>
        <h2>{props.name}</h2>
        <span>PRO</span>
      </div>
      <h6>{`bio.fm/${props.bioFmUsername}`}</h6>
    </StyledHead>
  );
}

const StyledHead = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  right: 0;
  left: auto;
  z-index: 99;
  margin: 0 0 24px;
  padding: 24px 0;
  background: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  box-shadow: 0px 3px 5px 0px rgb(49 49 53 / 10%);

  @media (min-width: 600px) {
    margin: 0 auto 15px;
    width: 100%;
  }
  h2 {
    font-weight: 550;
    font-size: 22px;
    display: inline;
  }

  span {
    position: relative;
    top: -4px;
    background: #00c464;
    font-weight: 550;
    font-size: 12.8px;
    color: white;
    padding: 2px 6px 3px;
    margin: 0px 0px 0px 8px;
    border-radius: 6px;
  }
  h6 {
    font-size: 15px;
    font-weight: 500;
    color: white;
  }
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

export default Header;
