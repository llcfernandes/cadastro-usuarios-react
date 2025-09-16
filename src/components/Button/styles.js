import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  border-radius: 30px;
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;

  &:hover {
    opacity: .7;
    color: ${(props) => (props.theme === "primary" ? "#fff" : "#181f36")};
    background-color: ${(props) => (props.theme === "primary" ? "" : "#fff")};
    transition: 0.7s;
  }

  &:active {
    opacity: .5;
    transition: none;
  }
`;
