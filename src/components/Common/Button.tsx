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
  border?: string;
  color?: string;
}

const Button: FC<Iprops> = ({
  addon,
  addonPosition,
  label,
  height,
  width,
  backgroundColor,
  fontSize,
  border,
  color,
  onClick,
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      border={border}
      color={color}
      onClick={onClick}
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
  border?: string;
  color?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "12px"};
  width: ${(props) => props.width};
  cursor: pointer;
  border-radius: 8px;
  border: ${(props) =>
    props.border === "none" ? "none" : "1px solid #0a0a0a"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  display: flex;
  justify-content: center;
  padding-top: 11px;
  margin-right: 10px;
  color: ${(props) => props.color || "#000"};
  & svg {
    margin-left: 5px;
  }
`;
