import React from "react";
import styled from "styled-components";

interface Props {
  title: String;
}

export const TitleStyle = styled.h1`
  color: white;
  font-size: clamp(1rem, 3vw, 1.75rem);
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding-bottom: 2rem;
  @media (min-width: 30rem) {
    padding-left: 2rem;
    padding-bottom: 4rem;
  }
  @media (min-width: 60rem) {
    padding-bottom: 0;
  }
`;

export const PageTitle = (props: Props & { children?: React.ReactNode }) => {
  return (
    <TitleStyle>
      {props.children}
      {props.title}
    </TitleStyle>
  );
};
