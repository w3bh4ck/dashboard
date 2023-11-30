import styled from "styled-components";
import { Icon } from "../../components/Common/Icons";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav-item">
        <Icon
          className="action-icons"
          svg="account-icon"
          height={34}
          width={34}
        />
        <div className="arrow">
          <Icon className="" svg="down-arrow" />
        </div>
      </div>
      <div className="nav-item">
        <div className="arrow">En</div>
        <div className="arrow">
          <Icon className="" svg="down-arrow" />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.div`
  width: 100%;
  border-bottom: 1px solid #ededed;
  height: 60px;
  display: flex;
  justify-content: end;
  .nav-item {
    margin-right: 25px;
    display: flex;
    font-weight: 700;
    cursor: pointer;
  }

  .arrow {
    margin-top: 15px;
  }
  .action-icons {
    padding-top: 10px;
  }
`;
