import { Card, Grid, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import React from 'react'

const KingOfHillProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 999,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#000000',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 999,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#FF5811',
  },
}))

const BondingCurveProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 999,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#000000',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 999,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#FFE711',
  },
}))

export const TopBar: React.FunctionComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Card className="bg-[#1D202B] rounded-none border-0 p-5">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <Image className="w-[50px] rounded-full" src={require('@/common/assets/images/ava.jpg')} alt="" />
                <div>
                  <Typography className="text-base text-[#6F7287]">Coin name</Typography>
                  <span className="text-[#fff] text-base font-bold">Make Great Meow</span>
                </div>
              </div>
            </div>
            <div className="w-[1px] h-[22px] bg-[#262E35]"></div>
            <div>
              <Typography className="text-base text-[#6F7287]">Ticker</Typography>
              <span className="text-[#fff] text-base font-bold">MGM</span>
            </div>
            <div className="w-[1px] h-[22px] bg-[#262E35]"></div>
            <div>
              <Typography className="text-base text-[#6F7287]">Market cap</Typography>
              <span className="text-[#0BFF4F] text-base font-bold">102.35k</span>
            </div>
            <div className="w-[1px] h-[22px] bg-[#262E35]"></div>
            <div>
              <Typography className="text-base text-[#6F7287]">Virtual liquidity</Typography>
              <span className="text-[#0BFF4F] text-base font-bold">$11,164</span>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card className="bg-[#1D202B] rounded-none border-0 p-5 flex flex-col gap-2">
              <div className="flex justify-between">
                <Typography className="text-[#6F7287] text-base">King of the hill</Typography>
                <Typography className="text-[#fff] text-base">20%</Typography>
              </div>
              <KingOfHillProgress variant="determinate" value={50} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="bg-[#1D202B] rounded-none border-0 p-5 flex flex-col gap-2">
              <div className="flex justify-between ">
                <Typography className="text-[#6F7287] text-base">Bonding curve</Typography>
                <Typography className="text-[#fff] text-base">$4,417.437 / $64,948</Typography>
              </div>
              <BondingCurveProgress variant="determinate" value={50} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
