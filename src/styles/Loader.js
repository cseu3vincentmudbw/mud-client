import styled, { keyframes } from "styled-components";

// define keyframes
const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(80px, 0);
  }
`;

export const LoaderDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  div {
    position: absolute;
    top: 16.875px;
    width: 6.875px;
    height: 6.875px;
    border-radius: 50%;
    background: gold;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    :nth-child(1) {
      left: 3.75px;
      animation: ${ellipsis1} 0.75s infinite;
    }
    :nth-child(2) {
      left: 3.75px;
      animation: ${ellipsis2} 0.75s infinite;
    }
    :nth-child(3) {
      left: 16.25px;
      animation: ${ellipsis2} 0.75s infinite;
    }
    :nth-child(4) {
      left: 28.125px;
      animation: ${ellipsis3} 0.75s infinite;
    }
  }
`;
