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

export default function Home() {
  const [encodeMode, setEncodeMode] = useState(QREncodeModeType.BYTE)
  const [qrVersion, setQrVersion] = useState(1)
  const [qrErrorLevel, setQrErrorLevel] = useState(ErrorCorrectionType.M)
  const [dataMaskPattern, setDataMaskPattern] = useState(6)
  const [dataToEncode, setDataToEncode] = useState('HELLO WORLD')
  const [colored, setColored] = useState(true);
  const [tempData, setTempData] = useState<number[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setQrErrorLevel(parseInt(event.target.value))
  }

  useEffect(() => {
    //Seleciona versão
    setQrVersion(getMinimumQRVersion(dataToEncode, qrErrorLevel));
    setEncodeMode(getQREncodeMode(dataToEncode));
  },[dataToEncode, qrErrorLevel]);

  useEffect(() => {
    const tempo = setInterval(() => {
      setTempData((value) => [...value, finalDataInBits.shift()])
    }, 400)

    return () => clearInterval(tempo);
  }, [])

  const messagePolynomial = getMessagePolynomial(dataToEncode, qrErrorLevel);
  const numErrorCorrectionCodewords = getEcCodewordsPerBlock(qrVersion, qrErrorLevel);
  const generatorPolynomial = getGeneratorPolynomial(numErrorCorrectionCodewords);
  
  const messageGroups = divideCodewordsInBlocks(qrVersion, qrErrorLevel, messagePolynomial);
  const ecGroups = [] = getErrorCorrectionCodewordsInBlocks(messageGroups, generatorPolynomial, numErrorCorrectionCodewords);

  const organizedMessageGroups = getOrganizedCodeWords(qrVersion, qrErrorLevel, messageGroups);
  const organizedEcGroups = getOrganizedCodeWords(qrVersion, qrErrorLevel, ecGroups);

  const finalDataInBits = getFinalDataInBits(qrVersion, organizedMessageGroups, organizedEcGroups);


  return (
    <div className="flex h-screen w-screen justify-center overflow-auto bg-slate-800">
      <div className="flex w-screen items-center justify-evenly gap-4 bg-slate-200">
        <div className="flex flex-col items-center gap-2 rounded bg-white p-6">
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
                setDataToEncode(event.target.value);
              }}
            />
          </div>
          <div className="mt-4 w-full overflow-y-auto">
            <div>
              Encode mode: {QREncodeModeType[encodeMode]}({encodeMode})
            </div>
            <div>Qtd caracter: {dataToEncode.length}</div>
            <div>
              Error Correction: {ErrorCorrectionType[qrErrorLevel]}(
              {qrErrorLevel})
            </div>
            <div>
              QR min version: {qrVersion}
            </div>
            <div>
              Header:{' '}
              {getHeaderBits(
                qrVersion,
                encodeMode,
                dataToEncode
              )}
            </div>
            {/* <div>
              Ger: {generatorPolynomial.map(a => {return "["+a+"]"})}
            </div> */}
            <div>
              Mensagem:
              <pre>
                {messageGroups.map((group, i) => `  Group${i+1}:\n${group.map((block, j) => `     Block${j+1}:\n        ${block}`)}\n`)}
              </pre>
            </div>
            <div>
              EcCodeWords:
              <pre>
                {ecGroups.map((group, i) => `  Group${i+1}:\n${group.map((block, j) => `     Block${j+1}:\n        ${block}`)}\n`)}
              </pre>
            </div>
          </div>
        </div>
        <div className="flex size-[36rem] items-center justify-center p-4">
          <QrCodeComponent
            bordered={false}
            qrVersion={qrVersion}
            errorLevel={qrErrorLevel}
            dataMaskPattern={dataMaskPattern}
            finalData={tempData}
            colored={true}
          />
        </div>
      </div>
    </div>
  )
}
