import { createAction } from '@reduxjs/toolkit'

const SET_SHOW_CONNECT = createAction<boolean>('app/SET_SHOW_CONNECT')
const SET_RESOURCE_ACCOUNT = createAction<any[]>('app/SET_RESOURCE_ACCOUNT')
const SET_REFETCH_BALANCE = createAction<boolean>('app/SET_REFETCH_BALANCE')
const SET_THEME = createAction<string>('app/SET_THEME')
const SET_LOADING = createAction<boolean>('app/SET_LOADING')
const SET_REFETCH_NFTS = createAction<boolean>('app/SET_REFETCH_NFTS')

export default {
  SET_SHOW_CONNECT,
  SET_RESOURCE_ACCOUNT,
  SET_REFETCH_BALANCE,
  SET_THEME,
  SET_LOADING,
  SET_REFETCH_NFTS,
}
