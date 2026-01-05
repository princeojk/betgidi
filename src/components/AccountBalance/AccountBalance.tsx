import Button from "../Buttons/Button";
import css from "./AccountBalance.module.css";
// import { useBalance } from "./useBalance";

interface AccountBalanceProps {
  onOpenModel: (isOpen: boolean) => void;
}

export const AccountBalance: React.FC<AccountBalanceProps> = ({
  onOpenModel,
}) => {
  //   const { data: Balance, isLoading, isError } = useBalance();

  const Balance = {
    amount: 100,
  };

  //   if (isLoading) return <p>Loading...</p>;
  //   if (isError) return <p>Error loading balance.</p>;

  // const openDepositModal = () => {
  //   setOpenModal(true);
  // };

  return (
    <div className={css.balanceFund}>
      <div className={css.accountBalance}>
        <p className={css.balanceTitle}>Account Balance:</p>
        <p className={css.balanceAmount}>₦{Balance?.amount}</p>
      </div>
      <div className={css.fundAccount}>
        <Button onClick={() => onOpenModel(true)}>Deposit</Button>
      </div>
    </div>
  );
};

export default AccountBalance;
