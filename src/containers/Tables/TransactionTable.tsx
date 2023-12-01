import styled from "styled-components";

const TransactionTable = () => {
  return (
    <div>
      <div className="transaction table">
        <StyledTable>
          <tr>
            <th>Transaction ID</th>
            <th>Source</th>
            <th>Customer name</th>
            <th>Customer email</th>
            <th>Amount</th>
            <th>Request date</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>example@email.com</td>
            <td>$230.00</td>
            <td>24.08.2021</td>
            <td>Pending</td>
          </tr>
        </StyledTable>
      </div>
    </div>
  );
};

export default TransactionTable;

const StyledTable = styled.table`
  padding: 20px 15px 20px 15px;
  border-spacing: 30px;
  & tr {
    text-align: left;
  }
`;
