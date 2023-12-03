import styled from "styled-components";
import { navData } from "../../utils/mocks/mock";
import { Icon } from "../../components/Common/Icons";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Common/Button";
import { FC } from "react";

interface Iprops {
  open: boolean;
  onToggleSideBar: () => void;
}

interface Navprops {
  open: boolean;
}

const SideBar: FC<Iprops> = ({ open, onToggleSideBar }) => {
  const location = useLocation();

  return (
    <StyledNavbar open={open}>
      <div className="logo">
        <img
          src="/assets/klasha-logo.png"
          alt="klasha"
          height={24}
          width={84}
        />
      </div>
      {open && (
        <>
          {navData.map((navSection, i) => {
            return (
              <div className="section-header" key={`key_${i}`}>
                {navSection.title}
                <div className="nav-section">
                  {navSection.navs.map((nav, index) => (
                    <div
                      className={
                        location.pathname === nav.link ? "active link" : "link"
                      }
                      key={`key_${index}_sub`}
                    >
                      <div className="icon">
                        <Icon svg={nav.logo} />
                      </div>{" "}
                      <Link to={nav.link}>
                        <div>{nav.name}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </>
      )}
      <div className="actions">
        {open && (
          <StyledButton>
            <Icon svg="support" />
            <span className="label"> Support</span>
          </StyledButton>
        )}

        <div className="close-bar">
          <Button
            onClick={onToggleSideBar}
            width={open ? "120px" : "80px"}
            addonPosition={open ? "left" : "right"}
            label={open ? "Hide Panel" : "Open"}
            addon={open ? "left-arrow" : "right-arrow"}
          />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default SideBar;

const StyledNavbar = styled.div<Navprops>`
  padding-top: 25px;
  margin: 0px;
  padding-right: ${(props) => (props.open ? "30px" : "10px")};
  padding-left: ${(props) => (props.open ? "80px" : "40px")};
  background-color: #fffbf7;
  width: ${(props) => (props.open ? "250px" : "")};
  z-index: 10;
  .section-header {
    font-size: 16px;
    font-style: normal;
    color: #8d8d8d;
    margin-top: 15px;
  }

  .link {
    color: #0a0a0a;
    font-weight: 500;
    display: flex;
    margin-top: 10px;
    cursor: pointer;
  }

  .active {
    color: #ef2c5a;
    font-weight: 600;
  }

  .logo {
    margin-bottom: 40px;
  }

  .icon {
    margin-right: 15px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  .close-bar {
    margin-top: 15px;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify: center;
  color: #fff;
  border: none;
  background-color: #ef2c5a;
  padding: 10px;
  border-radius: 39px;
  width: 120px;
  cursor: pointer;
  margin-top: 60px;
  & .label {
    margin-top: 4px;
    margin-left: 15px;
  }
`;
