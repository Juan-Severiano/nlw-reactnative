import { colors } from '@/styles/colors'
import QRCodeSVG from 'react-native-qrcode-svg'

interface Props {
  value: string
  size: number
}

export function QRCode({ size, value }: Props) {
  return <QRCodeSVG size={size} value={value} color={colors.white} backgroundColor='transparent' />
}
