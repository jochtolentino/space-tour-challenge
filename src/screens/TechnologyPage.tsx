import React, { useState } from "react";
import { BackgroundContainer } from "../atoms/BackgroundContainer";
import techBG from "../assets/background-technology-desktop.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { textContainerVariants } from "../assets/animation/animations";
import vehicle from "../assets/tech/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/tech/image-space-capsule-portrait.jpg";
import spaceport from "../assets/tech/image-spaceport-portrait.jpg";
import styled from "styled-components";
import { TitleAndNumber } from "../molecules/TitleAndNumber";
import { PageDescriptionText } from "../atoms/PageDescriptionText";

const data = require("../assets/data/data.json");

export const TechContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10% 90%;
  justify-content: center;
  padding-top: clamp(5.5rem, 23vw, 13rem);
  padding-bottom: 1.5rem;
  text-align: center;
  @media (min-width: 30rem) {
    text-align: left;
  }
  background-image: url(${techBG});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 29rem) {
    background-image: url(${techBG});
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 60rem) {
    background-image: url(${techBG});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const InnerContainer = styled.div`
  text-align: center;

  @media (min-width: 60rem) {
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    gap: 12rem;
    align-items: center;
    padding-inline: 2rem;
  }

  @media (min-width: 84rem) {
    width: 1360px;
  }
`;

export const ImgContainer = styled.div`  
  @media(min-width:60rem) {
  order: 2;
`;

export const MotionImg = styled(motion.picture)`
  max-width: 30rem;
`;

export const TextContainer = styled.div`
  @media (min-width: 60rem) {
    order: 1;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    min-height: 30rem;
  }
`;

export const TextContainerRight = styled(motion.div)`
  color: white;
  @media (min-width: 60rem) {
    min-height: 30rem;
  }
`;

export const TerminologyText = styled.h2`
  font-size: clamp(0.875rem, 2vw, 1rem);
  letter-spacing: 3px;
  font-weight: 400;
  color: white;
`;

export const TextTitle = styled.h3`
  font-family: $ff-bellefair;
  font-weight: 400;
  font-size: clamp(1.5rem, 4vw, 3.5rem);
  text-transform: uppercase;
  padding-block: 0.5rem 1rem;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-block: 2rem;
  @media (min-width: 60rem) {
    flex-direction: column;
  }
`;

export const ButtonNavContainer = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-block: 2rem;
  @media (min-width: 60rem) {
    flex-direction: column;
  }
`;

export const ButtonStyle = styled.button<{ isClicked: boolean }>`
  border: 1px solid white;
  border-radius: 50%;
  background: 0;
  cursor: pointer;
  width: clamp(2.5rem, 4.5vw, 5rem);
  height: clamp(2.5rem, 4.5vw, 5rem);
  text-align: center;
  font-size: clamp(1.5rem, 1.75vw, 2rem);

  background-color: ${({ isClicked }) => (isClicked ? "white" : "")};
  color: ${({ isClicked }) => (isClicked ? "darkblue" : "white")};

  &:focus {
    outline: 2px dashed $clr-white;
    opacity: 1;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 2px dashed white;
    opacity: 1;
  }
`;

export const Seperator = styled.div`
  @media (min-width: 60rem) {
    display: flex;
    align-items: flex-end;
  }
`;

const TechnologyPage = () => {
  const [techId, setTechId] = useState(0);

  const { name, images, description } = data.technology[techId];

  const change = (id: number) => {
    setTechId(id);
  };

  const image = () => {
    if (name === "Launch vehicle") {
      return vehicle;
    } else if (name === "Spaceport") {
      return spaceport;
    } else {
      return capsule;
    }
  };

  return (
    <TechContainer>
      <TitleAndNumber pageTitle={"Space launch 101"} numberTitle={"03"} />

      <InnerContainer className="inner-container tech-container-inner">
        <ImgContainer>
          <AnimatePresence mode="wait">
            <MotionImg
              className="tech-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.75 } }}
              exit={{ opacity: 0 }}
              key={techId}
            >
              <source media="(min-width:30rem)" srcSet={image()} />
              <img src={image()} alt={name} />
            </MotionImg>
          </AnimatePresence>
        </ImgContainer>

        <TextContainer>
          <ButtonNavContainer>
            {data.technology.map((name: string, index: number) => (
              <ButtonStyle
                key={name}
                onClick={() => change(index)}
                isClicked={index === techId ? true : false}
              >
                {index + 1}
              </ButtonStyle>
            ))}
          </ButtonNavContainer>

          <TextContainerRight
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            key={techId}
          >
            <TerminologyText>The terminology...</TerminologyText>
            <TextTitle>{name}</TextTitle>
            <PageDescriptionText description={description} />
          </TextContainerRight>
        </TextContainer>
      </InnerContainer>
    </TechContainer>
  );
};

export default TechnologyPage;
