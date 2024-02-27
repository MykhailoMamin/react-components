import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.tableItem}>{type}</td>
            <td className={css.tableItem}>{amount}</td>
            <td className={css.tableItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
