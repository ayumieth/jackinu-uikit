import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { WalletIcon } from "../../../components/Svg";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="primary"
          onClick={() => {
            onPresentAccountModal();
          }}
          height="37px"
          style={{borderRadius:'45px',fontWeight:450,fontFamily:'CircularStd'}}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          variant="special"
          onClick={() => {
            onPresentConnectModal();
          }}
          height="37px"
          startIcon={<WalletIcon />}
          style={{borderRadius:'45px',fontWeight:450,fontFamily:'CircularStd'}}
        >
          Connect wallet
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
