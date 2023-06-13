import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../assets/animation/animations";

interface StyledMotionDivProps {
  backgroundImage: string;
}

export const CustomBg = styled(motion.div)<StyledMotionDivProps>`
  min-height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 8rem 1.75rem 3rem 1.75rem;

  @media(min-width: 29rem) {
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 12rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 60rem) {
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 20rem;
  }
`;

interface Props {
  path: string;
}

export const HomeContainer = (
  props: Props & { children?: React.ReactNode }
) => {
  return (
    <CustomBg
      variants={pageAnimation}
      animate="visible"
      initial="hidden"
      backgroundImage={props.path}
    >
      {props.children}
    </CustomBg>
  );
};
