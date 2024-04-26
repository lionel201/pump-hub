import { subscribeOnStream, unsubscribeFromStream } from './streaming.js'

const API_ENDPOINT = 'https://benchmarks.pyth.network/v1/shims/tradingview'

// Use it to keep a record of the most recent bar on the chart
const lastBarsCache = new Map()

const datafeed = {
  onReady: (callback) => {
    console.log('[onReady]: Method call')
    fetch(`${API_ENDPOINT}/config`).then((response) => {
      response.json().then((configurationData) => {
        console.log('configurationData', configurationData)
        setTimeout(() => callback(configurationData))
      })
    })
  },
  searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
    console.log('[searchSymbols]: Method call')
    fetch(`${API_ENDPOINT}/search?query=${userInput}`).then((response) => {
      response.json().then((data) => {
        console.log('1111', data)
        console.log('userInput', userInput)
        onResultReadyCallback(data)
      })
    })
  },
  resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
    console.log('[resolveSymbol]: Method call', symbolName)
    fetch(`${API_ENDPOINT}/symbols?symbol=${symbolName}`).then((response) => {
      response
        .json()
        .then((symbolInfo) => {
          if (symbolInfo['ticker'] == 'Crypto.PEPE/USD') {
            symbolInfo['name'] = '1000PEPEUSD'
            symbolInfo['description'] = '1000PEPE / US DOLLAR'
          }
          onSymbolResolvedCallback(symbolInfo)
        })
        .catch((error) => {
          console.log('[resolveSymbol]: Cannot resolve symbol', symbolName, 'error', error)
          onResolveErrorCallback('Cannot resolve symbol')
          return
        })
    })
  },

  getBars: (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
    const { from, to, firstDataRequest } = periodParams
    console.log('[getBars]: Method call', symbolInfo, resolution, from, to)
    fetch(
      `${API_ENDPOINT}/history?symbol=${symbolInfo.ticker}&from=${periodParams.from}&to=${periodParams.to}&resolution=${resolution}`,
    ).then((response) => {
      response
        .json()
        .then((data) => {
          console.log('data', data)
          if (data.t.length === 0) {
            onHistoryCallback([], { noData: true })
            return
          }
          const bars = []
          let priceScalar = symbolInfo['ticker'] == 'Crypto.PEPE/USD' ? 1000 : 1
          for (let i = 0; i < data.t.length; ++i) {
            bars.push({
              time: data.t[i] * 1000,
              low: data.l[i] * priceScalar,
              high: data.h[i] * priceScalar,
              open: data.o[i] * priceScalar,
              close: data.c[i] * priceScalar,
            })
          }
          if (firstDataRequest) {
            lastBarsCache.set(symbolInfo.ticker, {
              ...bars[bars.length - 1],
            })
          }
          onHistoryCallback(bars, { noData: false })
        })
        .catch((error) => {
          console.log('[getBars]: Get error', error)
          onErrorCallback(error)
        })
    })
  },

  subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) => {
    console.log('[subscribeBars]: Method call with subscriberUID:', subscriberUID)
    subscribeOnStream(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscriberUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(symbolInfo.ticker),
    )
  },
  unsubscribeBars: (subscriberUID) => {
    console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID)
    unsubscribeFromStream(subscriberUID)
  },
}

export default datafeed
