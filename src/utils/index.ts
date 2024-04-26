export function ellipseAddress(address: string = '', width: number = 10): string {
  return `${String(address).slice(0, width)}...${String(address).slice(-width)}`
}
