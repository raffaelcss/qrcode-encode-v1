import { useQrContext } from '@/context/QrBitContext'

interface BitComponentProps {
  bit: number
  twColor: string
  group: string
}

export default function BitComponent(props: BitComponentProps) {
  const { group, bit, twColor } = props

  const { selectedGroup, bordered, numered, colored, setSelectedGroup } = useQrContext()

  let color = colored ? twColor : (bit <=0 ? "white" : "black text-white")

  return (
    <div
      className={`qr-bit flex flex-1 cursor-pointer items-center justify-center ${(selectedGroup || group) != group ? 'opacity-25 ' : ''}${bordered ? 'border ' : ''}${color}`}
      onMouseEnter={() => setSelectedGroup(group)}
      onMouseLeave={() => setSelectedGroup('')}
    >
      {numered ? bit : ''}
    </div>
  )
}
