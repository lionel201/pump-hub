import { Card, Typography } from '@mui/material'
import React from 'react'

export const HolderDistribution: React.FunctionComponent = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <Card className="bg-[#1D202B] rounded-none border-0 p-5">
      <div>
        <Typography className="text-[#6F7287] font-bold text-lg">Holder distribution</Typography>
        <div className="flex flex-col gap-2  mt-5">
          {data.map((item, index) => {
            return (
              <div key={item} className="flex justify-between text-[#fff] text-base">
                <span>{index + 1}. 0x000</span>
                <span>10%</span>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
