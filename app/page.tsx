'use client'
import QrCodeComponent from '@/components/qrcode/page'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { useState } from 'react'

export default function Home() {
  const [qrProportion, setQrProportion] = useState(10)
  const [qrVersion, setQrVersion] = useState(2)
  const [qrErrorLevel, setQrErrorLevel] = useState(0)
  const [dataMaskPattern, setDataMaskPattern] = useState(6)

  const handleChange = (event: SelectChangeEvent) => {
    setQrErrorLevel(parseInt(event.target.value))
  }

  return (
    <div className="flex h-screen w-screen justify-center overflow-auto bg-slate-800">
      <div className="w-400 flex items-center bg-slate-300">
        <div className="flex w-48 flex-col items-center gap-2 p-4">
          <div className="w-28">
            <TextField
              id="QRProportionInput"
              label="Proportion"
              variant="outlined"
              size="small"
              value={qrProportion}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const proportion = parseInt(event.target.value) || qrProportion
                if (proportion > 0 && proportion <= 10) {
                  setQrProportion(proportion)
                }
              }}
            />
          </div>
          <div className="w-28">
            <TextField
              id="QRversionInput"
              label="Version"
              variant="outlined"
              size="small"
              value={qrVersion}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const version = parseInt(event.target.value) || qrVersion
                if (version > 0 && version <= 40) {
                  setQrVersion(version)
                }
              }}
            />
          </div>
          <FormControl className="w-28">
            <InputLabel id="demo-simple-select-label">Error Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={qrErrorLevel.toFixed(0)}
              size="small"
              label="Error Level"
              onChange={handleChange}
            >
              <MenuItem value={1}>L</MenuItem>
              <MenuItem value={0}>M</MenuItem>
              <MenuItem value={3}>Q</MenuItem>
              <MenuItem value={2}>H</MenuItem>
            </Select>
          </FormControl>
          <div className="w-28">
            <TextField
              id="QRmaskInput"
              label="Mask"
              variant="outlined"
              size="small"
              value={dataMaskPattern}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const mask = parseInt(event.target.value) ?? dataMaskPattern
                if (mask >= 0 && mask <= 7) {
                  setDataMaskPattern(mask)
                }
              }}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-5">
          <QrCodeComponent
            qrVersion={qrVersion}
            proportion={qrProportion}
            errorLevel={qrErrorLevel}
            dataMaskPattern={dataMaskPattern}
          />
        </div>
      </div>
    </div>
  )
}
