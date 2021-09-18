import React from "react";
import styled from "styled-components";
function Separator() {
  return <StyledSeparator></StyledSeparator>;
}

const StyledSeparator = styled.div`
  margin: 20px auto 10px;
  width: 90%;
  border-top: 1.8px #f1f2f6 solid;
  border-radius: 2px;

  @media (min-width: 950px) {
    margin: 20px auto 10px;
    width: 30%;
  }
`;

export default Separator;
