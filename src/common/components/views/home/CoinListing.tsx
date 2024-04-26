import React, { useEffect } from 'react'

import { CardCoinItem } from '@/common/components/views/home/CardCoinItem'

export const CoinListing: React.FunctionComponent = () => {
  const [coins, setCoins] = React.useState<CoinInfo[]>([])
  const data = [
    {
      id: 1,
      image: require('@/common/assets/images/1.png'),
    },
    {
      id: 2,
      image: require('@/common/assets/images/2.png'),
    },
    {
      id: 3,
      image: require('@/common/assets/images/3.png'),
    },
    {
      id: 4,
      image: require('@/common/assets/images/4.png'),
    },
    {
      id: 5,
      image: require('@/common/assets/images/5.png'),
    },
    {
      id: 6,
      image: require('@/common/assets/images/6.png'),
    },
    {
      id: 7,
      image: require('@/common/assets/images/7.png'),
    },
    {
      id: 8,
      image: require('@/common/assets/images/8.png'),
    },
    {
      id: 9,
      image: require('@/common/assets/images/9.png'),
    },
    {
      id: 10,
      image: require('@/common/assets/images/10.png'),
    },
    {
      id: 11,
      image: require('@/common/assets/images/11.png'),
    },
    {
      id: 12,
      image: require('@/common/assets/images/12.png'),
    },
    {
      id: 13,
      image: require('@/common/assets/images/13.png'),
    },
    {
      id: 14,
      image: require('@/common/assets/images/14.png'),
    },
    {
      id: 15,
      image: require('@/common/assets/images/15.png'),
    },
    {
      id: 16,
      image: require('@/common/assets/images/16.png'),
    },
    {
      id: 17,
      image: require('@/common/assets/images/17.png'),
    },
    {
      id: 18,
      image: require('@/common/assets/images/18.png'),
    },
    {
      id: 19,
      image: require('@/common/assets/images/19.png'),
    },
  ]

  useEffect(() => {
    setCoins(data)
  }, [data])

  return (
    <>
      <div className={'flex gap-4 pt-12'}></div>
      <div className="grid grid-cols-5 gap-8 mt-6">
        {coins.map((item, index) => {
          return <CardCoinItem item={item} key={index} index={index} />
        })}
      </div>
    </>
  )
}
