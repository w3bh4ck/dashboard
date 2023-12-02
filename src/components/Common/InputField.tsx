import styled from "styled-components";
import { Icon } from "./Icons";
import { FC } from "react";

interface Iprops {
  placeholder: string;
  addon?: string;
}

const InputField: FC<Iprops> = ({ placeholder, addon }) => {
  return (
    <StyledInput>
      <input placeholder={placeholder} />
      {addon && <Icon svg={addon} />}
    </StyledInput>
  );
};

export default InputField;

const StyledInput = styled.div`
  width: 283px;
  position: relative;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid #f4f4f4;
  margin-left: 10px;
  margin-right: 10px;
  & input {
    width: 86%;
    border: none;
    height: 40px;
    outline: none;
  }

  & svg {
    position: absolute;
    top: 10px;
  }
`;
