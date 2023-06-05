import styled from "styled-components";

interface Props {
  description : String;
}

export const PageDesciptionStyle = styled.p`
  color: white;
  font-family: $ff-barlow;
  font-weight: 300;
  font-size: clamp(0.9375rem, 2vw, 1.125rem);
  max-width: 27.75rem;
  margin: 0 auto;
  line-height: 1.75;
  color: $clr-pastel-blue;
  padding-bottom: 1rem;
  padding-inline: 2rem;
  @media (min-width: 60rem) {
    padding-inline: 0;
    margin: 0;
  }
`;


export const PageDescriptionText = (props: Props) => {
  return (
    <PageDesciptionStyle>
      {props.description}
    </PageDesciptionStyle>
  );
};
