import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { NumericFormat } from 'react-number-format'
type PositiveFloatNumInputProps = {
  inputAmount?: string
  className?: string
  isDisabled?: boolean
  placeholder?: string
  min?: number
  max?: number
  maxDecimals?: number
  onInputChange?: (e: any) => void
  onAmountChange?: (a: number) => void
  prefix?: string
  suffix?: string
  label?: string
  showCommas?: boolean
}

const MIN_DEFAULT = 0.00000001
const MAX_DEFAULT = Number.MAX_SAFE_INTEGER
const MAX_DECIMALS_DEFAULT = 9

export const InputCurrency: React.FunctionComponent<PositiveFloatNumInputProps> = (
  {
    inputAmount,
    isDisabled = false,
    label = '',
    min = MIN_DEFAULT,
    max = MAX_DEFAULT,
    maxDecimals = MAX_DECIMALS_DEFAULT,
    onInputChange = () => {},
    className,
    placeholder = '0.0000',
  },
  ref,
) => {
  return (
    <div className="flex items-center bg-[#0C0E16] px-4">
      <NumericFormat
        className={`${className} input-format`}
        aria-label={label}
        value={inputAmount}
        displayType="input"
        decimalScale={maxDecimals}
        placeholder={placeholder}
        decimalSeparator="."
        isAllowed={(values) => {
          const { formattedValue, floatValue } = values
          return formattedValue === '' || Number(floatValue) <= max
        }}
        onValueChange={(values: any) => {
          if (values.floatValue > max) {
            onInputChange(max)
          } else {
            onInputChange(values.floatValue)
          }
        }}
        disabled={isDisabled}
      />
      <span className="flex gap-1 min-w-[70px] justify-end">
        <div>
          <Image className="w-[25px] rounded-full" src={require('@/common/assets/images/APT.png')} alt="" />
        </div>
        <Typography className="text-xl text-[#FFFFFF]">APT</Typography>
      </span>
    </div>
  )
}
