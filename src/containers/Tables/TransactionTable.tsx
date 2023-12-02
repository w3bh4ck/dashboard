import styled from "styled-components";
import { transactions } from "../../utils/mocks/mock";
import TransactionItem from "../../components/Transactions/TransactionItem";

const TransactionTable = () => {
  return (
    <div>
      <div className="transaction table">
        <StyledTable>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Source</th>
              <th>Customer name</th>
              <th>Customer email</th>
              <th>Amount</th>
              <th>Request date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, i) => (
              <TransactionItem key={`key_${i}`} transaction={transaction} />
            ))}
          </tbody>
        </StyledTable>
      </div>
    </div>
  );
};

export default TransactionTable;

const StyledTable = styled.table`
  padding: 20px 15px 20px 15px;
  border-spacing: 0px;
  & th {
    font-size: 16px;
    font-weight: 600;
    padding: 28px;
  }
  & td {
    font-size: 14px;
    font-weight: 400;
    border-bottom: 1px solid #f7f7f7;
    padding: 28px;
  }
  .success {
    background-color: #f7f7f7;
  }
  & tr {
    text-align: left;
  }
`;
