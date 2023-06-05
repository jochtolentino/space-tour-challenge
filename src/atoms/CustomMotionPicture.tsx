import React, { Children } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface StyledMotionDivProps {
}

export const CustomBg = styled(motion.picture)`
  padding-inline: 6rem;
  padding-bottom: 2rem;
  rotate: 360deg;
  transition={{ repeat: Infinity, duration: 110 }}
  padding-inline: 0;
  order: 1;
`;

export const CustomMotionpicture = (props: StyledMotionDivProps  & { children?: React.ReactNode }) => {
  return (
    <CustomMotionpicture>
        {props.children}
    </CustomMotionpicture>
  );
};
