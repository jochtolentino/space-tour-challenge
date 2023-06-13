import React, { useState } from "react";
import crewBG from "../assets/background-crew-desktop.jpg";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import victorG from "../assets/crew/image-victor-glover.webp";
import markS from "../assets/crew/image-mark-shuttleworth.webp";
import douglasH from "../assets/crew/image-douglas-hurley.webp";
import anoushehA from "../assets/crew/image-anousheh-ansari.webp";
import { TitleAndNumber } from "../molecules/TitleAndNumber";
import { PageDescriptionText } from "../atoms/PageDescriptionText";
import { InnerWrapper } from "../atoms/InnerWrapper";
import { MainContainer } from "../atoms/MainContainer";

const data = require("../assets/data/data.json");

export const ImageContainer = styled.div`
  padding-inline: 6.5rem;
  margin: 0 auto;
  position: relative;
  max-width: 30rem;
  @media (min-width: 60rem) {
    order: 2;
    padding-inline: 0;
  }
  &::after {
    content: "";
    position: absolute;
    border-top: 1px solid $clr-white;
    opacity: 0.2;
    width: 85%;
    max-width: 30rem;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 60rem) {
      display: none;
    }
  }
`;

export const MotionImgContainer = styled(motion.picture)`
  max-width: 30rem;
`;

export const MotionDivContainer = styled(motion.div)`
  @media (min-width: 60rem) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`;

export const TextInnerContainer = styled.div`
  @media (min-width: 60rem) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`;

export const JobTitleText = styled.span`
  font-size: clamp(1rem, 2vw, 2rem);
  opacity: 0.5;
  color: white;
`;

export const NameText = styled.span`
  font-size: clamp(1.5rem, 4vw, 3.5rem);
  letter-spacing: 2px;
  color: white;
`;

export const ButtonContainer = styled.div`
  background-color: white;
  width: clamp(10px, 1vw, 15px);
  height: clamp(10px, 1vw, 15px);
  border-radius: 50%;
`;

export const ButtonNavContainer = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-block: 2rem;
  @media (min-width: 60rem) {
    order: 2;
    justify-content: flex-start;
  }
`;

export const ButtonStyle = styled.button<{ isClicked: boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  opacity: 0.5;
  opacity: ${({ isClicked }) => (isClicked ? "1" : "0.5")};
  &:focus {
    outline: 2px dashed $clr-white;
    opacity: 1;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 2px dashed $clr-white;
    opacity: 1;
  }
`;

const CrewPage = () => {
  const [crewId, setCrewId] = useState(0);

  const { name, images, role, bio } = data.crew[crewId];

  const change = (id: number) => {
    setCrewId(id);
  };

  const image = () => {
    if (name === "Douglas Hurley") {
      return douglasH;
    } else if (name === "Mark Shuttleworth") {
      return markS;
    } else if (name === "Victor Glover") {
      return victorG;
    } else {
      return anoushehA;
    }
  };

  return (
    <MainContainer path={crewBG} isDestination={false}>
      <TitleAndNumber pageTitle={"Meet your crew"} numberTitle={"02"} />

      <InnerWrapper>
        <ImageContainer>
          <AnimatePresence mode="wait">
            <MotionImgContainer
              key={crewId}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: 50, transition: { duration: 1 } }}
            >
              <source media="(min-width:30rem)" srcSet={image()} />
              <img src={image()} alt={name} />
            </MotionImgContainer>
          </AnimatePresence>
        </ImageContainer>

        <AnimatePresence mode="wait">
          <MotionDivContainer
            key={crewId}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
          >
            <ButtonNavContainer>
              {data.crew.map((name: string, index: number) => (
                <ButtonStyle
                  key={name}
                  onClick={() => change(index)}
                  isClicked={index === crewId ? true : false}
                >
                  <ButtonContainer aria-hidden="true"></ButtonContainer>
                </ButtonStyle>
              ))}
            </ButtonNavContainer>

            <TextInnerContainer>
              <JobTitleText>{role}</JobTitleText>
              <NameText>{name}</NameText>
              <PageDescriptionText description={bio} />
            </TextInnerContainer>
          </MotionDivContainer>
        </AnimatePresence>
      </InnerWrapper>
    </MainContainer>
  );
};

export default CrewPage;
