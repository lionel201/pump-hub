import { Button, Card, Typography } from '@mui/material'
import React from 'react'

import { TelegramIcon, TwitterIcon, WebIcon } from '@/common/icons'

export const TokenInformation: React.FunctionComponent = () => {
  return (
    <Card className="bg-[#1D202B] rounded-none border-0 p-5">
      <div>
        <Typography className="text-[#6F7287] font-bold text-lg">Holder distribution</Typography>
        <div className="flex flex-col gap-2  mt-5">
          <div className="flex justify-between text-white text-base">
            <div>Release Date</div>
            <div>April 23, 2024</div>
          </div>
          <div className="flex justify-between text-white text-base">
            <div>Token symbol</div>
            <div>MGM</div>
          </div>
          <div className="flex justify-between text-white text-base">
            <div>Total Supply</div>
            <div>1,000,000,000</div>
          </div>
          <div className="flex justify-between text-white text-base">
            <div>Network</div>
            <div>Aptos</div>
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            <Button className="bg-[#2E3340] flex flex-1 justify-center items-center gap-2 text-base border-0 text-[#fff]">
              <WebIcon />
              <span>Website</span>
            </Button>
            <Button className="bg-[#2E3340] flex flex-1  justify-center items-center gap-2 text-base border-0 text-[#fff]">
              <TelegramIcon />
              <span>Telegram</span>
            </Button>
            <Button className="bg-[#2E3340] flex flex-1  justify-center items-center gap-2 text-base border-0 text-[#fff]">
              <TwitterIcon />
              <span>Twitter</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
