import styled from "styled-components";
import PageWrapper from "../../containers/PageWrapper/PageWrapper";
import DashboardCard from "../../components/Cards/DashboardCard";
import ReportChart from "../../components/Charts/ReportChart";
import Button from "../../components/Common/Button";
import InputField from "../../components/Common/InputField";

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

        <StyledDashboardReport>
          <div className="action-section">
            <div className="title">Sales</div>
            <div className="days active">7 days</div>
            <div className="days">30 days</div>
            <div>
              <Button
                width="90px"
                addonPosition="right"
                label="USD"
                fontSize="14px"
                addon="down-arrow"
              />
            </div>
            <div>
              <InputField placeholder="Email" />
            </div>
            <div>
              <Button
                width="148px"
                addonPosition="left"
                label="Download Report"
                addon="download-arrow"
              />
            </div>
          </div>
        </StyledDashboardReport>
        <div className="report">
          <ReportChart />
          <StyledCta>
            <p>KlashaWire - send money to businesses globally from Africa</p>
            <button>Send Wire</button>
          </StyledCta>
        </div>
      </StyledMain>
    </PageWrapper>
  );
};

export default Dashboard;

const StyledMain = styled.main`
  padding: 20px;
  .report {
    display: flex;
  }
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

const StyledDashboardReport = styled.div`
  .action-section {
    display: flex;
    margin-top: 40px;
    font-size: 14px;
    & .title {
      font-size: 20px;
      margin: 8px 10px;
    }
    & .days {
      font-size: 14px;
      font-weight: 600;
      margin: 10px;
    }
    & .active {
      color: red;
    }
  }
`;

const StyledCta = styled.div`
  width: 280px;
  height: 275px;
  border-radius: 8px;
  background-image: url("/assets/pattern-bg.png");
  background-size: cover;
  background-position: center;
  margin-left: 20px;
  & p {
    margin: 20px;
    width: 190px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }

  & button {
    margin-top: 50px;
    margin-left: 20px;
    border: none;
    border-radius: 8px;
    height: 48px;
    width: 130px;
    background-color: #000;
    color: #fff;
  }
`;
