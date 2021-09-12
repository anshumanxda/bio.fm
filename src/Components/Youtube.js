import React from "react";
import styled from "styled-components";
function Youtube(props) {
  return (
    <StyledDiv>
      <div className="first-div">
        <img
          src="https://img.icons8.com/ios-filled/32/4d4d4d/youtube-play.png"
          alt="youtube-icon"
        />
        <h4>{props.heading}</h4>
      </div>
      <div className="second-div">
        <img className="avatar" src={props.avatarLink} alt="avatar" />
        <div className="black-inside-div">
          <h2>{props.name}</h2>
          <p> {props.description} </p>
          <a href="https://www.youtube.com/channel/UCTsM1dSAiXqiV5oZjuNw_Bg?sub_confirmation=1">
            Subscribe
          </a>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 10px 16px;

  @media (min-width: 600px) {
    margin: 0 auto;
    width: 33%;
  }

  .first-div {
    display: flex;
    align-items: center;
    padding-bottom: 10px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  h4 {
    font-size: 19.2px;
    padding-left: 5px;
  }

  .second-div {
    height: 201px;
    align-items: center;
    display: flex;
    padding: 24px;
    border-radius: 8px;
    background: linear-gradient(0deg, rgb(40, 40, 40) 0%, rgb(79, 79, 79) 100%);
  }

  .black-inside-div {
    padding-left: 20px;
  }
  .avatar {
    border-radius: 100%;
    height: 73.5px;
    width: 73.5px;

    @media (min-width: 600px) {
      height: 136.66px;
      width: 136.66px;
    }
  }

  h2 {
    color: #ffffff;
    font-weight: 550;
    font-size: 17.6px;
    margin: 0 0 8px;
  }

  p {
    height: 63px;
    margin: 0 0 16px;
    font-size: 12.4px;
    color: white;
    padding-bottom: 5px;
    letter-spacing: 1.4px;
  }

  a {
    color: white;
    font-weight: 550;
    text-decoration: none;
    border-radius: 6px;
    padding: 10px;
    background: #ff0000;
    cursor: pointer;
  }
`;

export default Youtube;
