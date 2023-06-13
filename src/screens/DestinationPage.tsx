import destinationBG from "../assets/background-destination-desktop.jpg";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { TitleAndNumber } from "../molecules/TitleAndNumber";
import { PageDescriptionText } from "../atoms/PageDescriptionText";
import { InnerWrapper } from "../atoms/InnerWrapper";
import { MainContainer } from "../atoms/MainContainer";
import { useState } from "react";

const data = require("../assets/data/data.json");

export const TextWrapperMotionDiv = styled(motion.div)`
  @media (min-width: 60rem) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`;

export const ImgStyled = styled(motion.picture)`
  padding-inline: 6rem;
  padding-bottom: 2rem;
  @media (min-width: 60rem) {
    padding-inline: 0;
    order: 1;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (min-width: 60rem) {
    justify-content: flex-start;
    gap: 2.5rem;
  }
`;

const PastelBlue = "#a3c6e4";

export const DestBtn = styled.button<{ isClicked: boolean }>`
  color: ${PastelBlue};
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  position: relative;

  &:hover {
    color: white;
  }

  &::before {
    color: white;
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 2rem;
    background: ${({ isClicked }) => (isClicked ? "white" : "")};
    width: 100%;
    height: 3px;
    transition: all 0.3s ease-in;
  }

  &:focus {
    outline: 2px dashed white;
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

export const DetailWrapper = styled.div`
  position: relative;
  @media (min-width: 30rem) {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    padding-top: 1.5rem;
  }
  @media (min-width: 60rem) {
    justify-content: flex-start;
    gap: 4rem;
  }
  &::before {
    content: "";
    border: 0;
    border-top: 1px solid white;
    opacity: 0.2;
    width: 80%;
    background: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 60rem) {
      left: 0;
      transform: none;
      width: 100%;
    }
  }
`;

export const InnerDetailWrapper = styled.div`
  padding-top: 2rem;
  @media (min-width: 30rem) {
    padding-top: 2rem;
  }
`;

export const DestName = styled.h2`
  color: white;
  font-size: clamp(3.5rem, 10vw, 6.25rem);
`;

export const DestDetail = styled.p`
  color: white;
  font-size: 1.75rem;
`;

export const DestTitle = styled.h3`
  color: white;
  font-size: 0.875rem;
`;

const DestinationPage = () => {
  const [destinationId, setDestinationId] = useState(0);

  const { name, images, description, distance, travel } =
    data.destinations[destinationId];

  const change = (id: number) => {
    setDestinationId(id);
  };

  const image = () => {
    if (name === "Moon") {
      return moon;
    } else if (name === "Mars") {
      return mars;
    } else if (name === "Europa") {
      return europa;
    } else {
      return titan;
    }
  };

  return (
    <MainContainer path={destinationBG} isDestination={true}>
      <TitleAndNumber pageTitle={"Pick your destination"} numberTitle={"01"} />
      <InnerWrapper>
        <AnimatePresence mode="wait">
          <motion.div
            key={destinationId}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, scale: 0.75, transition: { duration: 1 } }}
          >
            <ImgStyled
              animate={{ rotate: "360deg" }}
              transition={{ repeat: Infinity, duration: 110 }}
            >
              <source media="(min-width:30rem)" srcSet={image()} />
              <img src={image()} alt={name} />
            </ImgStyled>
          </motion.div>
        </AnimatePresence>

        <TextWrapperMotionDiv>
          <BtnWrapper>
            {data.destinations.map((destName: string, index: number) => (
              <DestBtn
                key={destName}
                onClick={() => change(index)}
                isClicked={index === destinationId ? true : false}
              >
                {data.destinations[index].name}
              </DestBtn>
            ))}
          </BtnWrapper>

          <DestName>{name}</DestName>

          <PageDescriptionText description={description} />

          <DetailWrapper>
            <InnerDetailWrapper>
              <DestTitle>Average distance</DestTitle>
              <DestDetail>{distance}</DestDetail>
            </InnerDetailWrapper>
            <InnerDetailWrapper>
              <DestTitle>est. travel time</DestTitle>
              <DestDetail>{travel}</DestDetail>
            </InnerDetailWrapper>
          </DetailWrapper>
        </TextWrapperMotionDiv>
      </InnerWrapper>
    </MainContainer>
  );
};

export default DestinationPage;
