import { FC } from "react";
import styled from "styled-components";
import { Icon } from "./Icons";

interface Iprops {
  addonPosition?: "left" | "right";
  addon?: string;
  label: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  backgroundColor?: string;
  fontSize?: string;
  type?: "button" | "submit";
}

const Button: FC<Iprops> = ({
  addon,
  addonPosition,
  label,
  height,
  width,
  backgroundColor,
  fontSize,
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    >
      {addonPosition === "left" && <Icon svg={addon ?? ""} />}
      <span className="label">{label}</span>
      {addonPosition === "right" && <Icon svg={addon ?? ""} />}
    </StyledButton>
  );
};

export default Button;

interface StyledButtonProps {
  height?: string;
  width?: string;
  onClick?: () => void;
  backgroundColor?: string;
  fontSize?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "12px"};
  width: ${(props) => props.width};
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #0a0a0a;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  display: flex;
  justify-content: center;
  padding-top: 11px;
  margin-right: 10px;

  & svg {
    margin-left: 5px;
  }
`;
