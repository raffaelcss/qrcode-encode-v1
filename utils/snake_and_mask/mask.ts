export function mask(data: number[][], fix: number[][], dataMaskPattern: number) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      let invert = false
      switch (dataMaskPattern) {
        case 0:
          invert = (i + j) % 2 == 0
          break
        case 1:
          invert = i % 2 == 0
          break
        case 2:
          invert = j % 3 == 0
          break
        case 3:
          invert = (i + j) % 3 == 0
          break
        case 4:
          invert = (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0
          break
        case 5:
          invert = ((i * j) % 2) + ((i * j) % 3) == 0
          break
        case 6:
          invert = (((i * j) % 2) + ((i * j) % 3)) % 2 == 0
          break
        case 7:
          invert = (((i + j) % 2) + ((i * j) % 3)) % 2 == 0
          break
        default:
          break
      }
      if (invert && fix[j][i] == null) {
        // data[j][i] = data[j][i] != 1 ? 1 : 0
        //Adaptado para cores
        data[j][i] = data[j][i] * -1
        if (data[j][i] == -1 || data[j][i] == 0){
          data[j][i] += 1;
        }
      } else {
        data[j][i] = data[j][i] ?? 0
      }
    }
  }
}