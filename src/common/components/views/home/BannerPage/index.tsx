import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const BannerPage: React.FunctionComponent = () => {
  return (
    <div className="-mt-[75px] banner-page pt-10 min-h-[520px] flex items-center justify-center">
      <div className="flex flex-col items-center relative">
        <Image
          className="w-[100px] rounded-full absolute -left-[250px] top-5"
          src={require('@/common/assets/images/f7878e0046df0e6f57c0cd6824538e12.gif')}
          alt=""
        />
        <Image
          className="w-[100px] rounded-full absolute -left-[200px] -bottom-20"
          src={require('@/common/assets/images/image 29.png')}
          alt=""
        />
        <Image
          className="w-[80px] rounded-full absolute -right-[250px] -top-[80px] rotate-[20deg]"
          src={require('@/common/assets/images/f7878e0046df0e6f57c0cd6824538e12.gif')}
          alt=""
        />
        <Image
          className="w-[90px] h-[90px] rounded-full absolute -right-[250px] top-20 rotate-[320deg]"
          src={require('@/common/assets/images/035578f578131d07e61abdc0c309a1b2.gif')}
          alt=""
        />
        <Image
          className="w-[120px] rounded-full absolute -right-[200px] -bottom-20"
          src={require('@/common/assets/images/image 30.png')}
          alt=""
        />
        <div className="flex items-center gap-5">
          <Image className="w-[55px] h-auto" src={require('@/common/assets/images/king.gif')} alt="" />
          <Image className="w-[320px] h-auto" src={require('@/common/assets/images/KING OF THE HILL.png')} alt="" />
        </div>
        <div className="border flex gap-8 border-[#fff] p-5 mt-10">
          <div>
            <Image className="w-[120px]" src={require('@/common/assets/images/image 7.png')} alt="" />
          </div>
          <div>
            <Typography className="font-black text-white text-2xl">Scoobyyyyyyy</Typography>
            <div className="mt-3 text-base">Ticker: scb</div>
            <div className="flex text-base gap-2">
              <span>Created by:</span>
              <Image className="w-[18px] rounded-full" src={require('@/common/assets/images/image 8.png')} alt="" />
              <span>0x0000</span>
            </div>
          </div>
        </div>
        <Button className="bg-[#FF5811] rounded-none font-bold tracking-[2px] text-base border-0 text-white min-w-[280px] h-[52px] mt-6">
          START A NEW COIN
        </Button>
      </div>
    </div>
  )
}
