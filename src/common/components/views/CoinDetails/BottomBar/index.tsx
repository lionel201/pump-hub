import { Button } from '@mui/material'
import React from 'react'

import { Comments } from '@/common/components/views/CoinDetails/Comments'

export enum ACTION_TYPE {
  Thread = 'Thread',
  TradeHistory = 'TradeHistory',
  MyTrades = 'MyTrades',
}

export const BottomBar: React.FunctionComponent = () => {
  const [mode, setMode] = React.useState(ACTION_TYPE.Thread)
  return (
    <div className="pt-4">
      <div className="flex items-center gap-4 pb-3  border-b border-[#262E35] mb-4">
        <Button
          onClick={() => setMode(ACTION_TYPE.Thread)}
          className={`bg-transparent border-0 p-0 ${mode === ACTION_TYPE.Thread ? 'text-[#fff]' : 'text-[#6F7287]'}  font-bold text-lg`}
        >
          Thread
        </Button>
        <div className="w-[1px] h-[22px] bg-[#262E35] "></div>
        <Button
          onClick={() => setMode(ACTION_TYPE.TradeHistory)}
          className={`bg-transparent border-0 ${mode === ACTION_TYPE.TradeHistory ? 'text-[#fff]' : 'text-[#6F7287]'} font-bold text-lg`}
        >
          Trade history
        </Button>
        <div className="w-[1px] h-[22px] bg-[#262E35]"></div>
        <Button
          onClick={() => setMode(ACTION_TYPE.MyTrades)}
          className={`bg-transparent border-0 p-0 ${mode === ACTION_TYPE.MyTrades ? 'text-[#fff]' : 'text-[#6F7287]'} font-bold text-lg`}
        >
          My trades
        </Button>
      </div>
      {mode === ACTION_TYPE.Thread && <Comments />}
    </div>
  )
}
