import styled from "styled-components";
import PageWrapper from "../../containers/PageWrapper/PageWrapper";
import { Icon } from "../../components/Common/Icons";

const Transactions = () => {
  return (
    <PageWrapper>
      <StyledMain>
        <div className="page-title">
          <span>Transaction history</span>
        </div>
        <div className="table-actions">
          <StyledInput>
            <input placeholder="Search" />
            <Icon svg="search" />
          </StyledInput>
          <div className="filter">
            <StyledButton>
              Filter
              <Icon svg="filter" />
            </StyledButton>
            <StyledButton>Export</StyledButton>
          </div>
        </div>
      </StyledMain>
    </PageWrapper>
  );
};

export default Transactions;

const StyledMain = styled.div`
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  width: 100%;
  margin-top: 80px;
  .filter {
    display: flex;
  }

  .table-actions {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 20px 10px;
  }
  .page-title {
    color: #1a1a1a;
    font-size: 18px;
    font-weight: 500;
    padding: 20px 10px 20px;
    border-bottom: 1px solid #f0f0f0;

    & span {
      padding: 10px;
    }
  }
`;

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

const StyledButton = styled.button`
  height: 40px;
  width: 94px;
  border-radius: 8px;
  border: 1px solid #0a0a0a;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 11px;
  margin-right: 10px;

  & svg {
    margin-left: 5px;
  }
`;
