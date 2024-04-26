import { createTheme, ThemeProvider } from '@mui/material'
import React, { PropsWithChildren, useMemo } from 'react'

import PageHeader from '@/common/components/Header'
import { basicTheme } from '@/theme'

export const LayoutPage: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const theme = useMemo(() => {
    const themeCreate = createTheme(basicTheme)
    return themeCreate
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <PageHeader />
      <div className="pt-[75px]">{children}</div>
    </ThemeProvider>
  )
}
