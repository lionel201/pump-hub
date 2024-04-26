import { Button, Card } from '@mui/material'
import React from 'react'

import { InputCurrency } from '@/common/components/InputCurrency'

export enum ORDER_TYPE {
  BUY = 'BUY',
  SELL = 'SELL',
}

export const CardOrder: React.FunctionComponent = () => {
  const [orderType, setOrderType] = React.useState<ORDER_TYPE>(ORDER_TYPE.BUY)
  return (
    <Card className="bg-[#1D202B] rounded-none border-0 p-5">
      <div className="flex items-center">
        <Button
          onClick={() => setOrderType(ORDER_TYPE.BUY)}
          className={`${orderType === ORDER_TYPE.BUY ? 'bg-[#18BA6C]' : 'bg-[#cddafe1a]'}  h-10 rounded-none text-[#FFFFFF] flex-1 border-0 font-bold text-xl`}
        >
          Buy
        </Button>
        <Button
          onClick={() => setOrderType(ORDER_TYPE.SELL)}
          className={`${orderType === ORDER_TYPE.SELL ? 'bg-[#F23645]' : 'bg-[#cddafe1a]'} h-10 rounded-none text-[#FFFFFF] flex-1 border-0 font-bold text-xl`}
        >
          Sell
        </Button>
      </div>
      <div className="flex justify-between mt-8">
        <Button className="bg-[#2E3340] border-0 text-[#fff]">Switch to scb</Button>
        <Button className="bg-[#2E3340] border-0 text-[#fff]">Slippage</Button>
      </div>
      <div className="mt-2">
        <InputCurrency className="bg-[#0C0E16] font-bold border-0 w-full h-14  text-xl text-[#fff]" />
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <Button className="bg-[#2E3340] border-0 text-[#fff]">Reset</Button>
        <Button className="bg-[#2E3340] border-0 text-[#fff]">1 APT</Button>
        <Button className="bg-[#2E3340] border-0 text-[#fff]">5 APT</Button>
        <Button className="bg-[#2E3340] border-0 text-[#fff]">10 APT</Button>
      </div>
      <div className="mt-5 flex items-center text-lg gap-2 justify-between text-[#fff]">
        <div>You will receive</div>
        <div className="font-bold">0 MGM</div>
      </div>
      {orderType === ORDER_TYPE.BUY && (
        <Button className="bg-[#18BA6C] text-[#fff] border-0 w-full h-12 mt-5 text-xl font-bold">Buy MGM</Button>
      )}
      {orderType === ORDER_TYPE.SELL && (
        <Button className="bg-[#F23645] text-[#fff] border-0 w-full h-12 mt-5 text-xl font-bold">Sell MGM</Button>
      )}
    </Card>
  )
}
