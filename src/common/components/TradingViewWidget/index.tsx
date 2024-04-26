import dynamic from 'next/dynamic'

import { ChartingLibraryWidgetOptions, ResolutionString } from '../../../../public/static/charting_library'

const chartingLibraryPath = '/tradingview/charting_library/'

let tvScriptLoadingPromise: Promise<void> | undefined
const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  interval: '60' as ResolutionString,
  library_path: '/static/charting_library/',
  locale: 'en',
  // charts_storage_url: 'https://saveload.tradingview.com',
  // charts_storage_api_version: '1.1',
  client_id: 'tradingview.com',
  user_id: 'public_user_id',
  fullscreen: false,
  autosize: true,
}

// TODO MULTIPLE POSITIONS
interface TradingViewWidgetProps {
  symbol: string
  position: undefined
  shouldShowTPSLLines: boolean
  shouldShowEntryLine: boolean
  shouldShowLiquidationLine: boolean
}

const TVChartContainer = dynamic(
  () => import('@/common/components/TVChartContainer').then((mod) => mod.TVChartContainer),
  {
    ssr: false,
  },
)

const TradingViewWidget = ({
  symbol,
  position,
  shouldShowTPSLLines,
  shouldShowEntryLine,
  shouldShowLiquidationLine,
}: TradingViewWidgetProps) => {
  console.log('symbol', symbol)

  return (
    <div className={'h-[60vh] max-h-[550px] min-h-[250px] flex flex-wrap flex-row'}>
      <TVChartContainer
        tvProps={{ symbol, ...defaultWidgetProps }}
        position={position}
        shouldShowTPSLLines={shouldShowTPSLLines}
        shouldShowEntryLine={shouldShowEntryLine}
        shouldShowLiquidationLine={shouldShowLiquidationLine}
        symbol={symbol}
      />
    </div>
  )
}

export default TradingViewWidget
