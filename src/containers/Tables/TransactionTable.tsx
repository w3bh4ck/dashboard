import styled from "styled-components";

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
            <tr>
              <td>GB124QWERTY12346</td>
              <td>GTB</td>
              <td>Mike Owen</td>
              <td>example@email.com</td>
              <td>$230.00</td>
              <td>24.08.2021</td>
              <td>Pending</td>
            </tr>
            <tr className="success">
              <td>GB124QWERTY12346</td>
              <td>GTB</td>
              <td>Mike Owen</td>
              <td>example@email.com</td>
              <td>$230.00</td>
              <td>24.08.2021</td>
              <td>Successful</td>
            </tr>
            <tr>
              <td>GB124QWERTY12346</td>
              <td>GTB</td>
              <td>Mike Owen</td>
              <td>example@email.com</td>
              <td>$230.00</td>
              <td>24.08.2021</td>
              <td>Successful</td>
            </tr>
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
