import styled, { css } from "styled-components";

function Loading({ className, variant = "", title = "", description = "" }) {
  return (
    <LoadingContainer className={className}>
      <Title variant={variant}>{title}</Title>
      <Description variant={variant}>{description}</Description>
    </LoadingContainer>
  );
}

export default Loading;

const titleStyles = {
  big: css`
    font-size: 24px;
  `,
};

const descriptionStyles = {
  big: css`
    font-size: 18px;
    line-height: 1.61;
  `,
};

const LoadingContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin: 20px auto 3px;
  font-size: 20px;
  font-weight: 500;

  /* variant prop에 따라 추가 스타일 적용 */
  ${({ variant }) => titleStyles[variant]}
`;

const Description = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 2.07;
  color: #878787;

  /* variant prop에 따라 추가 스타일 적용 */
  ${({ variant }) => descriptionStyles[variant]}
`;
