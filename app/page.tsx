'use client'
import QrCodeComponent from '@/components/qrcode/page'
import { ErrorCorrectionType } from '@/types/errorCorrection-type'
import { QREncodeModeType } from '@/types/qrMode-type'
import { getQREncodeMode } from '@/utils/getQREncodeMode'
import { getHeaderBits } from '@/utils/getInitialBits'
import { getMinimumQRVersion } from '@/utils/getMinimumQRVersion'
import { getErrorCorrectionCodewordsInBlocks } from '@/utils/getErrorCorrectionCodewords'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { divideCodewordsInBlocks } from '@/utils/extras/divideCodewordsInBlocks'
import { getGeneratorPolynomial } from '@/utils/getGeneratorPolynomial'
import { getMessagePolynomial } from '@/utils/getMessagePolynomial'
import { getEcCodewordsPerBlock } from '@/utils/extras/blockInformations'
import { getOrganizedCodeWords } from '@/utils/extras/organizeGroups'
import { getFinalDataInBits } from '@/utils/getFinalDataInBits'
import { QRCodeContextProvider } from '@/context/QrBitContext'
import OptionsComponent from '@/components/options/page'

export default function Home() {
  const [encodeMode, setEncodeMode] = useState(QREncodeModeType.BYTE)
  const [qrVersion, setQrVersion] = useState(1)
  const [qrErrorLevel, setQrErrorLevel] = useState(ErrorCorrectionType.M)
  const [dataMaskPattern, setDataMaskPattern] = useState(2)
  const [dataToEncode, setDataToEncode] = useState('HELLO WORLD')
  const [colored] = useState(true)
  const [bordered] = useState(false)
  const [numbered] = useState(false)
  const [masked] = useState(true)
  const [tempData, setTempData] = useState<number[]>([])

  const handleChange = (event: SelectChangeEvent) => {
    setQrErrorLevel(parseInt(event.target.value))
  }

  useEffect(() => {
    //Seleciona versão
    setQrVersion(getMinimumQRVersion(dataToEncode, qrErrorLevel))
    setEncodeMode(getQREncodeMode(dataToEncode))
  }, [dataToEncode, qrErrorLevel])

  // useEffect(() => {
  //   const tempo = setInterval(() => {
  //     setTempData((value) => [...value, finalDataInBits.shift()])
  //   }, 400)

  //   return () => clearInterval(tempo);
  // }, [])

  const messagePolynomial = getMessagePolynomial(dataToEncode, qrErrorLevel)
  const numErrorCorrectionCodewords = getEcCodewordsPerBlock(
    qrVersion,
    qrErrorLevel
  )
  const generatorPolynomial = getGeneratorPolynomial(
    numErrorCorrectionCodewords
  )

  const messageGroups = divideCodewordsInBlocks(
    qrVersion,
    qrErrorLevel,
    messagePolynomial
  )
  const ecGroups = ([] = getErrorCorrectionCodewordsInBlocks(
    messageGroups,
    generatorPolynomial,
    numErrorCorrectionCodewords
  ))

  const organizedMessageGroups = getOrganizedCodeWords(
    qrVersion,
    qrErrorLevel,
    messageGroups
  )
  const organizedEcGroups = getOrganizedCodeWords(
    qrVersion,
    qrErrorLevel,
    ecGroups
  )

  const finalDataInBits = getFinalDataInBits(
    qrVersion,
    organizedMessageGroups,
    organizedEcGroups
  )

  return (
    <QRCodeContextProvider>
      <div className="flex h-screen w-screen justify-center overflow-auto bg-slate-800">
        <div className="flex w-screen items-center justify-evenly gap-1 bg-slate-200 px-5">
          <div className="flex h-[32rem] flex-col gap-2 rounded bg-white p-6">
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
                <MenuItem value={ErrorCorrectionType.L}>L</MenuItem>
                <MenuItem value={ErrorCorrectionType.M}>M</MenuItem>
                <MenuItem value={ErrorCorrectionType.Q}>Q</MenuItem>
                <MenuItem value={ErrorCorrectionType.H}>H</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-52">
              <InputLabel id="demo-simple-select-label">Mask</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dataMaskPattern}
                size="small"
                label="Mask"
                onChange={(event) => {
                  const mask = (event.target.value as number) ?? dataMaskPattern
                  setDataMaskPattern(mask)
                }}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
              </Select>
            </FormControl>
            <OptionsComponent />
            <div className="w-52 mt-4">
              <TextField
                id="dataToEncode"
                label="Texto"
                variant="outlined"
                multiline
                fullWidth
                minRows={4}
                value={dataToEncode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDataToEncode(event.target.value)
                }}
              />
            </div>
          </div>
          <div className="flex size-[36rem] items-center justify-center">
            <QrCodeComponent
              qrVersion={qrVersion}
              errorLevel={qrErrorLevel}
              dataMaskPattern={dataMaskPattern}
              finalData={finalDataInBits}
            />
          </div>
          <div className="bg-white p-3 h-[32rem] w-full overflow-auto">
            <div>
              Encode mode: {QREncodeModeType[encodeMode]}({encodeMode})
            </div>
            <div>Qtd caracter: {dataToEncode.length}</div>
            <div>
              Error Correction: {ErrorCorrectionType[qrErrorLevel]}({qrErrorLevel}
              )
            </div>
            <div>QR min version: {qrVersion}</div>
            <div>
              Header: {getHeaderBits(qrVersion, encodeMode, dataToEncode)}
            </div>
            {/* <div>
                Ger: {generatorPolynomial.map(a => {return "["+a+"]"})}
              </div> */}
            <div>
              Mensagem:
              <pre>
                {messageGroups.map(
                  (group, i) =>
                    ` Group${i + 1}:\n${group.map((block, j) => `  Block${j + 1}:\n   ${block}`)}\n`
                )}
              </pre>
            </div>
            <div>
              EcCodeWords:
              <pre>
                {ecGroups.map(
                  (group, i) =>
                    ` Group${i + 1}:\n${group.map((block, j) => `  Block${j + 1}:\n   ${block}`)}\n`
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </QRCodeContextProvider>
  )
}
