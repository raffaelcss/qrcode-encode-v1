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
  const [qrVersion, setQrVersion] = useState(2)
  const [qrErrorLevel, setQrErrorLevel] = useState(0)
  const [dataMaskPattern, setDataMaskPattern] = useState(6)
  const [dataToEncode, setDataToEncode] = useState("Raffael")

  const handleChange = (event: SelectChangeEvent) => {
    setQrErrorLevel(parseInt(event.target.value))
  }

  return (
    <div className="flex h-screen w-screen justify-center overflow-auto bg-slate-800">
      <div className="flex w-screen items-center justify-evenly bg-slate-200 gap-4">
        <div className="flex rounded bg-white flex-col items-center gap-2 p-6">
          <div className="w-52">
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
          <FormControl className="w-52">
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
          <div className="w-52">
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
          <div className="w-52">
            <TextField
              id="dataToEncode"
              label="Texto"
              variant="outlined"
              multiline
              fullWidth
              minRows={5}
              value={dataToEncode}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDataToEncode(event.target.value)
              }}
            />
          </div>
        </div>
        <div className="flex size-[36rem] items-center justify-center p-4">
          <QrCodeComponent
            qrVersion={qrVersion}
            errorLevel={qrErrorLevel}
            dataMaskPattern={dataMaskPattern}
            dataToEncode={dataToEncode}
          />
        </div>
      </div>
    </div>
  )
}
