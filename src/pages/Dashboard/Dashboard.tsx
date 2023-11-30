import styled from "styled-components";
import PageWrapper from "../../containers/PageWrapper/PageWrapper";

const Dashboard = () => {
  return (
    <PageWrapper>
      <StyledMain>
        <div className="page-title">Sales Overview</div>
        <div className="grid-4">
          <div className="sales-card">
            <div className="date">Today's sales</div>
            <div className="amount">₦1,652.50</div>
          </div>
          <div className="sales-card"></div>
          <div className="sales-card"></div>
          <div className="sales-card"></div>
        </div>
      </StyledMain>
    </PageWrapper>
  );
};

export default Dashboard;

const StyledMain = styled.main`
  padding: 20px;
  .page-title {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 20px;
    line-height: 32px;
    letter-spacing: -0.4px;
  }

  .date {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    padding: 20px 0px 0px 20px;
  }
  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sales-card {
    width: 240px;
    height: 240px;
    border-radius: 8px;
    border: 1px solid #000;
    background: #fff;
  }
  .amount {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    padding: 10px 0px 0px 20px;
  }
`;
