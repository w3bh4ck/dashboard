import { FC } from "react";
import styled from "styled-components";

interface Iprops {
  filter: string;
  duration: string;
  amount: string;
  inverse?: boolean;
  chart: string;
}

const DashboardCard: FC<Iprops> = ({
  filter,
  duration,
  amount,
  inverse,
  chart,
}) => {
  return (
    <StyledDashboardCard
      className={inverse ? "sales-card inverse" : "sales-card"}
    >
      <div className="date">{duration}</div>
      <div className="chart">
        <img src={`/assets/${chart}.png`} alt="chart" height={69} width={201} />
      </div>
      <div className="date">{filter}</div>
      <div className="amount">₦{amount}</div>
    </StyledDashboardCard>
  );
};

export default DashboardCard;

const StyledDashboardCard = styled.div`
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

  .chart {
    padding-top: 25px;
    display: flex;
    justify-content: center;
  }
  .amount {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0px 0px 20px;
  }
  .date {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    padding: 20px 0px 0px 20px;
  }
`;
