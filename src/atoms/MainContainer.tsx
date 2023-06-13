import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../assets/animation/animations";

interface StyledMotionDivProps {
  backgroundImage: string;
  isDestination: boolean
}

export const MotionDivStyled = styled(motion.div)<StyledMotionDivProps>`
  min-height: 90vh;
  display: grid;
  grid-template-rows: ${(props) => (props.isDestination ? '0% 90%' : '0% 80%')};
  justify-content: center;
  padding-top: clamp(5.5rem, 23vw, 13rem);
  padding-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 30rem) {
    text-align: left;
  }
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 29rem) {
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 60rem) {
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

interface Props {
  path: string;
  isDestination: boolean;
}

export const MainContainer = (
  props: Props & { children?: React.ReactNode }
) => {
  return (
    <MotionDivStyled
      variants={pageAnimation}
      animate="visible"
      initial="hidden"
      backgroundImage={props.path}
      isDestination={props.isDestination}
    >
      {props.children}
    </MotionDivStyled>
  );
};
