import * as Style from "./Card.style";

export const Card = ({ cardTitle, children }) => {
  return (
    <Style.Container>
      <div className="header">{cardTitle}</div>
      <div className="content">{children}</div>
    </Style.Container>
  );
};
