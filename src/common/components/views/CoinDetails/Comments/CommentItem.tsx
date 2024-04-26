import { Card, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import { CommentIcon, HeartIconInactive } from '@/common/icons'

export const CommentItem: React.FunctionComponent = () => {
  return (
    <Card className="bg-[#1D202B] rounded-none p-5 border-0">
      <div className="flex items-start gap-4">
        <Image
          className="wrapper-FNeSdxed w-[120px]"
          src={require('@/common/assets/images/QmU9BoJ8BBRpfEUjkQEHg1qbuWiuGrZ7uXThQH8biy7dGR.gif')}
          alt=""
        />
        <div>
          <div className="flex gap-3">
            <Image
              className="w-[30px] rounded-full"
              src={require('@/common/assets/images/QmNe1eCwBLT2tqa7e9YRqksskMbbedA3vnFVNwcUEWhTm4.gif')}
              alt=""
            />
            <div className="flex items-center gap-4">
              <Typography className="text-lg text-[#fff]">0x0000</Typography>
              <Typography className="text-[#6F7287] text-base">April 23, 2024</Typography>
            </div>
          </div>
          <p className="mt-3 text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="mt-4 flex items-center gap-5">
            <div className="flex items-center gap-2 text-[#9A9CAB]">
              <HeartIconInactive />
              <span>5 likes</span>
            </div>
            <div className="flex items-center gap-2 text-[#9A9CAB]">
              <CommentIcon />
              <span>5 mentions</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
