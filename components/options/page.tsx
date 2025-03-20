import { useQrContext } from '@/context/QrBitContext'
import { Switch } from '@mui/material'

interface OptionsComponentProps {}

export default function OptionsComponent(props: OptionsComponentProps) {
  const {
    colored,
    bordered,
    numered,
    masked,
    setColored,
    setBordered,
    setNumered,
    setMasked,
  } = useQrContext()

  return (
    <>
      <div className="flex w-52 items-center justify-between text-xl">
        Colorido
        <Switch
          checked={colored}
          onChange={(event) => {
            setColored(event.target.checked)
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <div className="flex w-52 items-center justify-between text-xl">
        Bordas
        <Switch
          checked={bordered}
          onChange={(event) => {
            setBordered(event.target.checked)
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <div className="flex w-52 items-center justify-between text-xl">
        Mostrar bits
        <Switch
          checked={numered}
          onChange={(event) => {
            setNumered(event.target.checked)
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <div className="flex w-52 items-center justify-between text-xl">
        Máscara
        <Switch
          checked={masked}
          onChange={(event) => {
            setMasked(event.target.checked)
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </>
  )
}
