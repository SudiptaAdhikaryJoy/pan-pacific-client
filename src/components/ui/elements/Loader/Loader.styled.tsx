import styled, { keyframes } from "styled-components";

// Define keyframes for animation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const textAnimateAnimation = keyframes`
  10% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

// Styled components
const LoaderContainer = styled.div`
  position: relative;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 150px;
  width: 150px;
  background: rgb(1, 1, 10);
  background: linear-gradient(
    90deg,
    rgba(123, 175, 217, 1) 0%,
    rgba(0, 106, 170, 1) 49%,
    rgba(7, 100, 174, 1) 100%
  );

  border-radius: 50%;
  animation: ${rotateAnimation} 3s linear infinite;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

const Box1Before = styled.div`
  content: "";
  position: absolute;
  inset: 15px;
  background: #f5f5f5;
  border-radius: 50%;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const LoaderText = styled.span`
  text-align: center;
  position: absolute;
  top: 57px;
  left: 40px;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
  font-weight: 800;
  font-size: 1rem;
  animation: ${textAnimateAnimation} 3s linear infinite;
`;

export const Styled = {
  LoaderContainer,
  Box1,
  Box1Before,
  LoaderText,
};
