import { t } from '@lingui/macro'
import { useEffect, useRef } from 'react'

import datafeed from '@/utils/datafeed'

import {
  ChartingLibraryFeatureset,
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget,
} from '../../../../public/static/charting_library'
import styles from './index.module.css'

const disabled_features: ChartingLibraryFeatureset[] = [
  'save_chart_properties_to_local_storage',
  'create_volume_indicator_by_default',
  'popup_hints',
  'header_symbol_search',
  'header_compare',
  'header_saveload',
  'border_around_the_chart',
  'timeframes_toolbar',
  // 'left_toolbar', // remove this for drawings
]

const enabled_features: ChartingLibraryFeatureset[] = []

// TODO SHOULD TAKE IN ARRAY OF POSITIONS
export type TVChartProps = {
  position: any | undefined
  tvProps: Partial<ChartingLibraryWidgetOptions>
  shouldShowTPSLLines: boolean
  shouldShowEntryLine: boolean
  shouldShowLiquidationLine: boolean
  symbol: string
}

// TODO: orders and trades on chart
export const TVChartContainer = (props: TVChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  // if (chartContainerRef != undefined && chartContainerRef.current != undefined) {
  //   chartContainerRef.current.style.background = 'transparent'
  // }
  const position = props.position

  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: props.tvProps.symbol,
      datafeed,
      interval: props.tvProps.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.tvProps.library_path,
      locale: props.tvProps.locale as LanguageCode,
      disabled_features,
      enabled_features,
      charts_storage_url: props.tvProps.charts_storage_url,
      charts_storage_api_version: props.tvProps.charts_storage_api_version,
      client_id: props.tvProps.client_id,
      user_id: props.tvProps.user_id,
      fullscreen: props.tvProps.fullscreen,
      theme: 'dark',
      autosize: props.tvProps.autosize,
      toolbar_bg: '#131722',
      custom_css_url: '/tradingview-chart.css',
      // custom_formatters: {
      // TODO: https://www.tradingview.com/charting-library-docs/latest/api/interfaces/Charting_Library.ChartingLibraryWidgetOptions/
      // },
      overrides: {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        'paneProperties.background': '#131722',
        // 'paneProperties.backgroundGradientStartColor': 'rgba(0,0,0,0.003)',
        // 'paneProperties.backgroundGradientEndColor': 'rgba(0,0,0,0.00003)',
        'paneProperties.backgroundType': 'solid',
        'paneProperties.separatorColor': '#131722',
        'paneProperties.vertGridProperties.style': '2',
        'paneProperties.horzGridProperties.style': '2',
        'paneProperties.vertGridProperties.color': 'rgba(255,255,255,0.05)',
        'paneProperties.horzGridProperties.color': 'rgba(255,255,255,0.05)',
        'paneProperties.legendProperties.showBackground': false,
        'paneProperties.legendProperties.backgroundTransparency': '100',
        'paneProperties.legendProperties.showStudyTitles': false,
        'scalesProperties.showStudyLastValue': false,
        'paneProperties.legendProperties.showVolume': false,
      },
    }

    const tvWidget = new widget(widgetOptions)

    // TODO: this is the code to show a "Hide Orders" button
    // tvWidget.onChartReady(() => {
    //   tvWidget.headerReady().then(() => {
    //     const button = tvWidget.createButton()
    //     button.setAttribute('title', 'Click to show a notification popup')
    //     button.classList.add('apply-common-tooltip')
    //     button.addEventListener('click', () =>
    //       tvWidget.showNoticeDialog({
    //         title: 'Notification',
    //         body: 'TradingView Charting Library API works correctly',
    //         callback: () => {
    //           console.log('Noticed!')
    //         },
    //       })
    //     )

    //     button.innerHTML = 'Check API'
    //   })
    // })

    tvWidget.onChartReady(() => {
      const stopLoss = position?.position.stopLossPrice
      const takeProfit = position?.position.takeProfitPrice
      const entry = position?.position.openingPrice
      const liqPrice = position?.position.liquidationPrice
      const positionSize = position?.position.positionSize

      if (props.shouldShowTPSLLines) {
        if (stopLoss !== undefined && stopLoss.toNumber() !== 0) {
          const sl = tvWidget
            .chart()
            .createOrderLine()
            .setText(t`Stop Loss`)
            .setLineColor('green')
            .setBodyTextColor('black')
            .setQuantityBackgroundColor('green')
            .setQuantityBorderColor('green')
            .setBodyBorderColor('red')
            .setQuantity('100%')
          sl.setPrice(stopLoss.toNumber())
        }
        if (takeProfit !== undefined && takeProfit.toNumber() !== 0) {
          const tp = tvWidget
            .chart()
            .createOrderLine()
            .setText(t`Take Profit`)
            .setLineColor('green')
            .setBodyTextColor('black')
            .setQuantityBackgroundColor('green')
            .setQuantityBorderColor('green')
            .setBodyBorderColor('green')
            .setQuantity('100%')
          tp.setPrice(takeProfit.toNumber())
        }
      }
      if (props.shouldShowEntryLine) {
        if (entry !== undefined && entry.toNumber() !== 0) {
          const tp = tvWidget
            .chart()
            .createPositionLine()
            .setText(t`Entry`)
            .setBodyTextColor('black')
            .setQuantity(positionSize.toString())
          tp.setPrice(entry.toNumber())
        }
      }
      if (props.shouldShowLiquidationLine) {
        if (entry !== undefined && entry.toNumber() !== 0) {
          const liq = tvWidget
            .chart()
            .createOrderLine()
            .setText(t`Liquidation`)
            .setQuantityBackgroundColor('red')
            .setQuantityBorderColor('red')
            .setBodyTextColor('black')
            .setQuantity(positionSize.toString())
          liq.setPrice(liqPrice.toNumber())
        }
      }
    })

    return () => {
      tvWidget.remove()
    }
    // TODO: I **think** we should have [props] but that totally breaks everything wtf
  }, [props.symbol, position, props.shouldShowEntryLine, props.shouldShowTPSLLines, props.shouldShowLiquidationLine])

  return (
    <>
      <div ref={chartContainerRef} className={styles.TVChartContainer} />
    </>
  )
}
