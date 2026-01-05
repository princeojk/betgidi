import { useState } from "react";
import Input from "../components/Input/Input";
import css from "./depositModal.module.scss";
import Button from "../components/Buttons/Button";
import wallet from "../../src/assets/images/wallet.png";

interface DepositModalProps {
  onClose: () => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ onClose }) => {
  const [input, setInput] = useState(0);
  const handleOnChange = (e: number) => {
    setInput(e);
  };

  const handleOnClick = () => {
    console.log(input);
  };

  return (
    <div className={css.depositContainer}>
      <div className={css.depositContent}>
        <div className={css.header}>
          <img src={wallet} alt="deposit" className={css.depositIcon} />
          <div>
            <p className={css.fundwallet}>Fund Wallet</p>
            <p>Add money to your account</p>
          </div>
        </div>
        <div className={css.inputConainer}>
          <img />
          <Input
            id="depostInput"
            containerSize="small"
            inputSize={10}
            color="black"
            layout="horizontal"
            onChange={(e) => handleOnChange(Number(e.target.value))}
          >
            Enter Amount:
          </Input>
        </div>
        <div className={css.buttons}>
          <Button size="small" onClick={handleOnClick}>
            Proceed to Payment
          </Button>
          <Button size="small" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
