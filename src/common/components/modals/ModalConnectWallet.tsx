import { useWallet, Wallet } from '@aptos-labs/wallet-adapter-react'
import { Button, Dialog, Typography } from '@mui/material'
import React from 'react'

interface Props {
  isModalOpen: boolean
  handleClose: () => void
}

export const ModalConnectWallet: React.FunctionComponent<Props> = ({ isModalOpen, handleClose }) => {
  const { wallets, connect, connected } = useWallet()

  const handleConnect = (wallet: Wallet) => {
    try {
      connect(wallet.name)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Dialog maxWidth="xs" fullWidth onClose={handleClose} open={isModalOpen}>
      <div className={'p-5'}>
        <Typography className="text-xl text-center font-bold text-[#fff]">Connect Wallet</Typography>
        <div className="flex flex-col gap-4 mt-8">
          {wallets?.map((wallet) => (
            <Button
              variant={'outlined'}
              onClick={() => handleConnect(wallet)}
              key={wallet.name}
              className="flex border-gray-600 h-12 items-center justify-between p-4 bg-transparent rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img className="w-[28px] rounded-full" src={wallet.icon} alt={wallet.name} />
                <Typography className="text-[#fff]">{wallet.name}</Typography>
              </div>
              {wallet.readyState === 'Installed' || wallet.readyState === 'Loadable' ? (
                <div className="w-[10px] h-[10px] rounded-full bg-[#10D181]"></div>
              ) : (
                <div className="w-[10px] h-[10px] rounded-full bg-[#ccc]"></div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </Dialog>
  )
}
