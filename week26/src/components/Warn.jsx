import styled, { css } from "styled-components";
import warnIcon from "./assets/warn.svg";

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

const WarnContainer = styled.div`
  text-align: center;
`;

const Icon = styled.img`
  display: block;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 20px auto 3px;
  font-size: 20px;
  font-weight: 500;

  /* variant prop에 따라 추가 스타일을 적용 */
  ${({ variant }) => titleStyles[variant]}
`;

const Description = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 2.07;
  color: #878787;

  /* variant prop에 따라 추가 스타일을 적용 */
  ${({ variant }) => descriptionStyles[variant]}
`;

function Warn({ className, variant = "", title = "", description = "" }) {
  return (
    <WarnContainer className={className}>
      <Icon src={warnIcon} alt="경고" />
      <Title variant={variant}>{title}</Title>
      <Description variant={variant}>{description}</Description>
    </WarnContainer>
  );
}

export default Warn;
