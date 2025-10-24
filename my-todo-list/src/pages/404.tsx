import whereGif from "../assets/images/Where.gif";
import {
  ErrorPageBackLink,
  ErrorPageContainer,
  ErrorPageImage,
  ErrorPageInfoBlock,
  ErrorPageText,
} from "../styles/NotFoundPage.styled";

export const NotFoundPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorPageInfoBlock>
        <ErrorPageText>404</ErrorPageText>
        <ErrorPageBackLink to="/">← Back to Home</ErrorPageBackLink>
      </ErrorPageInfoBlock>

      <ErrorPageImage imageRendering={whereGif} />
    </ErrorPageContainer>
  );
};
