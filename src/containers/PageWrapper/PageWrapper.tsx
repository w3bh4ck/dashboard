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
        <div className="content">{children}</div>
      </div>
    </StyledWrapper>
  );
};

export default PageWrapper;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  position: relative;
  min-height: 100vh;
  .content {
    padding: 20px;
    min-height: 100vh;
  }
  .main {
    width: 100vw;
    min-height: 100vh;
  }
`;
