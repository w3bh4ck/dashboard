import styled from "styled-components";
import PageWrapper from "../../containers/PageWrapper/PageWrapper";
import DashboardCard from "../../components/Cards/DashboardCard";

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
          <DashboardCard
            chart="chart1"
            filter="This Week"
            duration="24 Aug - 01 Sep 21"
            amount="1,652.50"
            inverse
          />
          <DashboardCard
            chart="chart2"
            filter="This Month"
            duration="24 Aug - 01 Sep 21"
            amount="1,652.50"
          />
          <DashboardCard
            chart="chart3"
            filter="Last Month"
            duration="24 Aug - 01 Sep 21"
            amount="1,652.50"
          />
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
    grid-gap: 15px;
  }

  .sales-card {
    width: 240px;
    height: 240px;
    border-radius: 8px;
    border: 1px solid #000;
    background: #fff;
  }

  .inverse {
    background-color: #000;
    color: #ffffff;
  }

  .amount {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0px 0px 20px;
  }
`;
