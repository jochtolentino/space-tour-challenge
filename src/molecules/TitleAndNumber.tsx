import { PageTitle } from "../atoms/PageTitle";
import { TitleNumber } from "../atoms/TitleNumber";

interface Props {
  pageTitle: String;
  numberTitle: String;
}

export const TitleAndNumber = (props: Props) => {
  return (
    <PageTitle title={props.pageTitle}>
      <TitleNumber titleNumber={props.numberTitle}></TitleNumber>
    </PageTitle>
  );
};
