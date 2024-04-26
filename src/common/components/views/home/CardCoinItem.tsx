import { Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  active?: boolean
  item: CoinInfo | null
  index: number
}

export const CardCoinItem: React.FunctionComponent<Props> = ({ active, item, index }) => {
  const router = useRouter()

  const goToDetail = async () => {
    await router.push('/xyz')
  }

  return (
    <div
      onClick={goToDetail}
      className={`flex ${index === 0 ? 'animate-shake' : ''} flex-col cursor-pointer gap-2 pb-10`}
    >
      <div>
        <Image src={item?.image ?? ''} alt="" />
      </div>
      <Typography className="font-bold text-white text-xl">Scoobyyyyyyy</Typography>
      <div>
        Market cap: <span className="text-[#0BFF4F]">102.35k</span>
      </div>
      <div className="flex text-base gap-2">
        <span>Created by:</span>
        <Image className="w-[18px] rounded-full" src={require('@/common/assets/images/image 8.png')} alt="" />
        <span className="text-[#FF5811]">0x0000</span>
      </div>
      <p className="text-[#6F7287]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>
  )
}
