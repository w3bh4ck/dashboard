import styled from "styled-components";
import PageWrapper from "../../containers/PageWrapper/PageWrapper";
import TransactionTable from "../../containers/Tables/TransactionTable";
import Button from "../../components/Common/Button";
import InputField from "../../components/Common/InputField";

const Transactions = () => {
  return (
    <PageWrapper>
      <StyledMain>
        <div className="page-title">
          <span>Transaction history</span>
        </div>
        <div className="table-actions">
          <InputField placeholder="Search" addon="search" />
          <div className="filter">
            <Button
              label="Filter"
              addon="filter"
              addonPosition="right"
              width="100px"
            />
            <Button label="Export" width="94px" />
          </div>
        </div>
        <TransactionTable />
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
    padding: 10px 10px 10px 10px;
    border-bottom: 1px solid #f0f0f0;
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
