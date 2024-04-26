import { createReducer } from '@reduxjs/toolkit'

// import { RootState } from '@/stores/rootReducer'
import actions from './actions'

interface appState {
  showConnect: boolean
}

export const initState: appState = {
  showConnect: false,
}

export default createReducer(initState, (builder) => {
  builder.addCase(actions.SET_SHOW_CONNECT, (state, { payload }) => {
    console.log('payload', payload)
    state.showConnect = payload
  })
})

// export const getAllTokens = (state: RootState) => state.app.tokens
// export const getAllResourceAccounts = (state: RootState) => state.app.resourceAccounts
