import React from "react";
import styled from "styled-components";
function Content(props) {
  const userSvg =
    "https://img.icons8.com/windows/32/4d4d4d/user-male-circle.png";
  return (
    <StyledDiv className="container">
      <div className="head">
        <img src={userSvg} alt="link icon" />
        <h4>{props.heading}</h4>
      </div>

      <a href={props.link}>
        <div className="download-section">
          <p>{props.downloadText}</p>

          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
            width="26"
            height="26"
          >
            <path
              fill="#40e0d0"
              fillRule="evenodd"
              stroke="none"
              strokeWidth="1"
              d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1a9 9 0 100-18 9 9 0 000 18zm4.12-13.12a3.007 3.007 0 010 4.253l-1.285 1.284-.709-.708 1.285-1.285a2.004 2.004 0 10-2.835-2.835L9.29 7.874l-.708-.709 1.284-1.284a3.007 3.007 0 014.252 0zm-4.696 7.53l1.285-1.284.709.709-1.285 1.284A2.999 2.999 0 018.007 15a3.007 3.007 0 01-2.126-5.133l1.284-1.285.71.71-1.285 1.284a2.006 2.006 0 001.417 3.422 1.99 1.99 0 001.417-.588zm1.708-5.25l.708.708-2.98 2.98-.708-.709 2.98-2.98z"
            ></path>
          </svg>
        </div>
      </a>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 0 16px;

  @media (min-width: 950px) {
    margin: 0 auto;
    width: 33%;
  }

  div {
    display: flex;
  }

  .head {
    align-items: center;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
  }

  .download-section {
    padding: 10px 7px 10px 20px;
    margin: 15px 0 15px;
    background: #f1f2f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;

    svg {
      position: relative;
      top: 1px;
      right: 18px;
    }
  }

  h4 {
    font-size: 19.2px;
    padding-left: 5px;
  }

  p {
    width: 90%;
    color: #313135;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Content;
