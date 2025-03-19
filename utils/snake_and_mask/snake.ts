import { getQRCodeSize } from "../extras/getQRCodeSize"

export function snake(data: number[][], qrVersion: number, content: number[]) {
  const lastIndex = getQRCodeSize(qrVersion) - 1

  let countContent = 0
  let countRow = lastIndex
  let countCol = lastIndex / 2
  let up = true
  let alter = false

  //Andando em cada bit do content
  while (countContent < content.length){
    //Exceção, padrão de tempo vertical
    let posPadraoTempoVertical = false;
    if (countCol <= 3){
      posPadraoTempoVertical = true;
    }
    const x = countCol * 2 - (alter ? 1 : 0) - (posPadraoTempoVertical ? 1 : 0);
    const y = countRow
    if (x < 0){
      break
    }
    if (data[x][y] == null){
      data[x][y] = content[countContent];
      countContent++;
    }
    //Só sobe ou desce a linha se ja tiver feito o zig zag
    if (alter){
      if (up){
        countRow--;
      } else {
        countRow++;
      }
    }
    if (countRow < 0){
      up = false;
      countRow = 0;
      //Diminui duas colunas por conta do zig zag
      countCol--;
    }
    if (countRow > lastIndex){
      up = true;
      countRow = lastIndex;
      //Diminui duas colunas por conta do zig zag
      countCol--;
    }
    //alterna entre o zig zig das colunas
    alter = !alter;
  }
}