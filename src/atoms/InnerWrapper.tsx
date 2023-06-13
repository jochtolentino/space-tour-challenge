import React, { ReactNode } from "react";

import styled from "styled-components";

export const InnerContainer = styled.div`
  max-width: 12000px;
  align-items: flex-end;
  text-align: center;
    @media (min-width: 60rem) {
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    gap: 20rem;
    align-items: center;
    padding-inline: 2rem;
  }
`;

interface Props {
  children?: ReactNode;
};

export const InnerWrapper: React.FC<Props> = ({ children }) => {
  return <InnerContainer>{children}</InnerContainer>;
};
