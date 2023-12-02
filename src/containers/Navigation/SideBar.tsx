import styled from "styled-components";
import { navData } from "../../utils/mocks/mock";
import { Icon } from "../../components/Common/Icons";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  return (
    <StyledNavbar>
      <div className="logo">
        <img
          src="/assets/klasha-logo.png"
          alt="klasha"
          height={24}
          width={84}
        />
      </div>
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
    </StyledNavbar>
  );
};

export default SideBar;

const StyledNavbar = styled.div`
  padding-top: 25px;
  margin: 0px;
  padding-right: 30px;
  padding-left: 50px;
  background-color: #fffbf7;
  width: 250px;
  height: 100%;
  font-family: "inter";
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
`;
