import React, { PropsWithChildren } from 'react'

export const Container: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className={'container max-w-[1680px] mx-auto px-4 lg:px-8'}>{children}</div>
}
