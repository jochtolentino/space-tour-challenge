import styled from "styled-components";

interface Props {
  titleNumber: String;
}

export const TitleNumberStyle = styled.span`
  color: white;
  font-weight: 500;
  opacity: 0.25;
  padding-right: 0.75rem;
`;

export const TitleNumber = (props: Props) => {
  return <TitleNumberStyle>{props.titleNumber}</TitleNumberStyle>;
};
