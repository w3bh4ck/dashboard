import { FC } from "react";
import { Transaction } from "../../types/types";

interface Iprops {
  transaction: Transaction;
}

const TransactionItem: FC<Iprops> = ({ transaction }) => {
  return (
    <tr className={transaction.status === "successful" ? "success" : "open"}>
      <td>{transaction.id}</td>
      <td>{transaction.source}</td>
      <td>{transaction.customerName}</td>
      <td>{transaction.customerEmail}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.requestDate}</td>
      <td>{transaction.status}</td>
    </tr>
  );
};

export default TransactionItem;
