import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import homeBG from "../assets/home_bg.jpg";
import { HomeContainer } from "../atoms/HomeContainer";

export const ExploreButton = styled(motion.button)`
  background: hsl(0, 0%, 100%);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  letter-spacing: 2px;
  font-size: clamp(1.25rem, 4vw, 2rem);
  width: clamp(9.375rem, 32vw, 17.125rem);
  height: clamp(9.375rem, 32vw, 17.125rem);
  margin-top: 4.5rem;
`;

export const HomeDIV = styled.div`
  @media (min-width: 60rem) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1300px;
    margin: 0 auto;
    gap: 6rem;
  }
  @media (min-width: 100rem) {
    max-width: 1350px;
    justify-content: space-between;
  }
`;

export const DIVText = styled.div`
  @media (min-width: 60rem) {
    text-align: left;
  }
`;

export const CustomTitle = styled.h1`
  font-size: clamp(1rem, 2.5vw, 1.75rem);
  font-weight: 400;
  letter-spacing: 3px;
  color: white;
`;

export const CustomHighLightedText = styled.span`
  display: block;
  font-size: clamp(5rem, 20vw, 9.375rem);
`;

export const CustomHomeText = styled.p`
  font-size: clamp(0.9375rem, 2.75vw, 1.125rem);
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.75;
  max-width: 27rem;
  margin: 0 auto;
  color: hsl(231, 77%, 90%);
`;

const HomePage = () => {
  return (
    <HomeContainer path={homeBG}>
      <HomeDIV>
        <DIVText>
          <CustomTitle>
            So, you want to travel to
            <CustomHighLightedText>Space</CustomHighLightedText>
          </CustomTitle>
          <CustomHomeText>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </CustomHomeText>
        </DIVText>
        <ExploreButton
          whileHover={{ boxShadow: "0 0 0 40px hsla(0, 0%, 100%, 0.175)" }}
          transition={{ ease: "easeOut", duration: 0.35 }}
        >
          Explore
        </ExploreButton>
      </HomeDIV>
    </HomeContainer>
  );
};

export default HomePage;
