import { FC, ReactNode } from "react";
import SideBar from "../Navigation/SideBar";
import styled from "styled-components";
import Navbar from "../Navigation/Navbar";

interface Iprops {
  children: ReactNode;
}

const PageWrapper: FC<Iprops> = ({ children }) => {
  return (
    <StyledWrapper>
      <SideBar />
      <div className="main">
        <Navbar />
        {children}
      </div>
    </StyledWrapper>
  );
};

export default PageWrapper;

const StyledWrapper = styled.div`
  display: flex;
  .main {
    width: 84%;
  }
`;
