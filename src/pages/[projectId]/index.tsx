import { Grid } from '@mui/material'
import React from 'react'

import { Container } from '@/common/components/layout/Container'
import TradingViewWidget from '@/common/components/TradingViewWidget'
import { BottomBar } from '@/common/components/views/CoinDetails/BottomBar'
import { CardOrder } from '@/common/components/views/CoinDetails/CardOrder'
import { HolderDistribution } from '@/common/components/views/CoinDetails/HolderDistribution'
import { TokenInformation } from '@/common/components/views/CoinDetails/TokenInformation'
import { TopBar } from '@/common/components/views/CoinDetails/TopBar'

const Page: React.FunctionComponent = () => {
  return (
    <Container>
      <Grid spacing={{ xs: 2 }} container className="pt-0 sm:pt-8 pb-10">
        <Grid item md={8} className="space-y-3">
          <TopBar />
          <TradingViewWidget
            symbol="Crypto.APT/USD"
            position={undefined} // TODO positions
            shouldShowEntryLine={false}
            shouldShowTPSLLines={false}
            shouldShowLiquidationLine={false}
          />
          <BottomBar />
        </Grid>
        <Grid item md={4} className="space-y-4">
          <CardOrder />
          <HolderDistribution />
          <TokenInformation />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Page
