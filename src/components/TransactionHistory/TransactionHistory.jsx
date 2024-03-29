import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead className={css.head}>
        <tr>
          <th className={css.headTh}>Type</th>
          <th className={css.headTh}>Amount</th>
          <th className={css.headTh}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className={css.bodyTr} key={item.id}>
            <td className={css.bodyTd}>{item.type}</td>
            <td className={css.bodyTd}>{item.amount}</td>
            <td className={css.bodyTd}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table >
  );
}