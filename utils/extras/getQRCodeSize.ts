export function getQRCodeSize(qrVersion: number) {
  return ((qrVersion - 1) * 4) + 21;       //(((V-1)*4)+21)
}