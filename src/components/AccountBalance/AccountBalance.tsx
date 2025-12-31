import css from "./AccountBalance.module.css";
// import { useBalance } from "./useBalance";

export const AccountBalance: React.FC = () => {
  //   const { data: Balance } = useBalance();

  const Balance = {
    amount: 100,
  };
  return (
    <div className={css.accountBalance}>
      <p className={css.balanceTitle}>Balance:</p>
      <p className={css.balance}>₦{Balance?.amount}</p>
    </div>
  );
};

export default AccountBalance;
