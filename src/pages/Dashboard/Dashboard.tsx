import styled from "styled-components";
import PageWrapper from "../../containers/PageWrapper/PageWrapper";
import DashboardCard from "../../components/Cards/DashboardCard";
import { Icon } from "../../components/Common/Icons";
import ReportChart from "../../components/Charts/ReportChart";

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

        {/* Dashboard report */}
        <StyledDashboardReport>
          <div className="action-section">
            <div className="title">Sales</div>
            <div className="days active">7 days</div>
            <div className="days">30 days</div>
            <div>
              <StyledMenuButton>
                <span>USD</span>
                <span>
                  <Icon className="" svg="down-arrow" />
                </span>
              </StyledMenuButton>
            </div>
            <div>
              <StyledInput>
                <input placeholder="Email" />
              </StyledInput>
            </div>
            <div>
              <StyledButton>
                <Icon svg="download-arrow" />
                Download Report
              </StyledButton>
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

const StyledMenuButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #0a0a0a;
  height: 40px;
  width: 91px;
  & span {
    margin-top: 10px;
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
    width: 80%;
    border: none;
    height: 40px;
    outline: none;
  }
`;

const StyledButton = styled.button`
  height: 40px;
  width: 148px;
  border-radius: 8px;
  border: 1px solid #0a0a0a;
  background-color: #fff;
  display: flex;
  justify: center;
  padding-top: 11px;
`;

const StyledCta = styled.div`
  width: 280px;
  height: 284px;
  border-radius: 8px;
  background-image: url("/assets/pattern-bg.png");
  background-size: cover;
  background-position: center;
  margin-left: 10px;
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
