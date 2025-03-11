import { ErrorCorrectionType } from "@/types/errorCorrection-type";

export interface QRCodeVersionData {
  totalNumberOfDataCodewords: number;
  ecCodewordsPerBlock: number;
  NumberOfBlocksInGroup1: number;
  NumberOfDataCodewordsInEachBlocksOfGroup1: number;
  NumberOfBlocksInGroup2?: number;
  NumberOfDataCodewordsInEachBlocksOfGroup2?: number;
}

export const blockInformations: Record<string, QRCodeVersionData> = {
  '1-L': { totalNumberOfDataCodewords: 19, ecCodewordsPerBlock: 7, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 19 },
  '1-M': { totalNumberOfDataCodewords: 16, ecCodewordsPerBlock: 10, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 16 },
  '1-Q': { totalNumberOfDataCodewords: 13, ecCodewordsPerBlock: 13, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 13 },
  '1-H': { totalNumberOfDataCodewords: 9, ecCodewordsPerBlock: 17, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 9 },
  
  '2-L': { totalNumberOfDataCodewords: 34, ecCodewordsPerBlock: 10, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 34 },
  '2-M': { totalNumberOfDataCodewords: 28, ecCodewordsPerBlock: 16, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 28 },
  '2-Q': { totalNumberOfDataCodewords: 22, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 22 },
  '2-H': { totalNumberOfDataCodewords: 16, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 16 },

  '3-L': { totalNumberOfDataCodewords: 55, ecCodewordsPerBlock: 15, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 55 },
  '3-M': { totalNumberOfDataCodewords: 44, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 44 },
  '3-Q': { totalNumberOfDataCodewords: 34, ecCodewordsPerBlock: 18, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 17 },
  '3-H': { totalNumberOfDataCodewords: 26, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 13 },

  '4-L': { totalNumberOfDataCodewords: 80, ecCodewordsPerBlock: 20, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 80 },
  '4-M': { totalNumberOfDataCodewords: 64, ecCodewordsPerBlock: 18, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 32 },
  '4-Q': { totalNumberOfDataCodewords: 48, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 24 },
  '4-H': { totalNumberOfDataCodewords: 36, ecCodewordsPerBlock: 16, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 9 },

  '5-L': { totalNumberOfDataCodewords: 108, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 108 },
  '5-M': { totalNumberOfDataCodewords: 86, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 43 },
  '5-Q': { totalNumberOfDataCodewords: 62, ecCodewordsPerBlock: 18, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },
  '5-H': { totalNumberOfDataCodewords: 46, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 11, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 12 },

  '6-L': { totalNumberOfDataCodewords: 136, ecCodewordsPerBlock: 18, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 68 },
  '6-M': { totalNumberOfDataCodewords: 108, ecCodewordsPerBlock: 16, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 27 },
  '6-Q': { totalNumberOfDataCodewords: 76, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 19 },
  '6-H': { totalNumberOfDataCodewords: 60, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 15 },

  '7-L': { totalNumberOfDataCodewords: 156, ecCodewordsPerBlock: 20, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 78 },
  '7-M': { totalNumberOfDataCodewords: 124, ecCodewordsPerBlock: 18, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 31 },
  '7-Q': { totalNumberOfDataCodewords: 88, ecCodewordsPerBlock: 18, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 14, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 15 },
  '7-H': { totalNumberOfDataCodewords: 66, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 13, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 14 },

  '8-L': { totalNumberOfDataCodewords: 194, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 97 },
  '8-M': { totalNumberOfDataCodewords: 154, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 38, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 39 },
  '8-Q': { totalNumberOfDataCodewords: 110, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 18, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 19 },
  '8-H': { totalNumberOfDataCodewords: 86, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 14, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 15 },

  '9-L': { totalNumberOfDataCodewords: 232, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 116 },
  '9-M': { totalNumberOfDataCodewords: 182, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 36, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 37 },
  '9-Q': { totalNumberOfDataCodewords: 132, ecCodewordsPerBlock: 20, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 16, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 17 },
  '9-H': { totalNumberOfDataCodewords: 100, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 12, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 13 },

  '10-L': { totalNumberOfDataCodewords: 274, ecCodewordsPerBlock: 18, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 68, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 69 },
  '10-M': { totalNumberOfDataCodewords: 216, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 43, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 44 },
  '10-Q': { totalNumberOfDataCodewords: 154, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 6, NumberOfDataCodewordsInEachBlocksOfGroup1: 19, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 20 },
  '10-H': { totalNumberOfDataCodewords: 122, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 6, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '11-L': { totalNumberOfDataCodewords: 324, ecCodewordsPerBlock: 20, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 81 },
  '11-M': { totalNumberOfDataCodewords: 254, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 50, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 51 },
  '11-Q': { totalNumberOfDataCodewords: 180, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 22, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 23 },
  '11-H': { totalNumberOfDataCodewords: 140, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 12, NumberOfBlocksInGroup2: 8, NumberOfDataCodewordsInEachBlocksOfGroup2: 13 },

  '12-L': { totalNumberOfDataCodewords: 370, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 92, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 93 },
  '12-M': { totalNumberOfDataCodewords: 290, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 6, NumberOfDataCodewordsInEachBlocksOfGroup1: 36, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 37 },
  '12-Q': { totalNumberOfDataCodewords: 206, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 20, NumberOfBlocksInGroup2: 6, NumberOfDataCodewordsInEachBlocksOfGroup2: 21 },
  '12-H': { totalNumberOfDataCodewords: 158, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 7, NumberOfDataCodewordsInEachBlocksOfGroup1: 14, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 15 },

  '13-L': { totalNumberOfDataCodewords: 428, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 107 },
  '13-M': { totalNumberOfDataCodewords: 334, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 8, NumberOfDataCodewordsInEachBlocksOfGroup1: 37, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 38 },
  '13-Q': { totalNumberOfDataCodewords: 244, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 8, NumberOfDataCodewordsInEachBlocksOfGroup1: 20, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 21 },
  '13-H': { totalNumberOfDataCodewords: 180, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 12, NumberOfDataCodewordsInEachBlocksOfGroup1: 11, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 12 },

  '14-L': { totalNumberOfDataCodewords: 461, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 115, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 116 },
  '14-M': { totalNumberOfDataCodewords: 365, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 40, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 41 },
  '14-Q': { totalNumberOfDataCodewords: 261, ecCodewordsPerBlock: 20, NumberOfBlocksInGroup1: 11, NumberOfDataCodewordsInEachBlocksOfGroup1: 16, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 17 },
  '14-H': { totalNumberOfDataCodewords: 197, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 11, NumberOfDataCodewordsInEachBlocksOfGroup1: 12, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 13 },

  '15-L': { totalNumberOfDataCodewords: 523, ecCodewordsPerBlock: 22, NumberOfBlocksInGroup1: 5, NumberOfDataCodewordsInEachBlocksOfGroup1: 87, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 88 },
  '15-M': { totalNumberOfDataCodewords: 415, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 5, NumberOfDataCodewordsInEachBlocksOfGroup1: 41, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 42 },
  '15-Q': { totalNumberOfDataCodewords: 295, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 5, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '15-H': { totalNumberOfDataCodewords: 223, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 11, NumberOfDataCodewordsInEachBlocksOfGroup1: 12, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 13 },

  '16-L': { totalNumberOfDataCodewords: 589, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 5, NumberOfDataCodewordsInEachBlocksOfGroup1: 98, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 99 },
  '16-M': { totalNumberOfDataCodewords: 453, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 7, NumberOfDataCodewordsInEachBlocksOfGroup1: 45, NumberOfBlocksInGroup2: 3, NumberOfDataCodewordsInEachBlocksOfGroup2: 46 },
  '16-Q': { totalNumberOfDataCodewords: 325, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 15, NumberOfDataCodewordsInEachBlocksOfGroup1: 19, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 20 },
  '16-H': { totalNumberOfDataCodewords: 253, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 13, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '17-L': { totalNumberOfDataCodewords: 647, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 107, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 108 },
  '17-M': { totalNumberOfDataCodewords: 507, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 10, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '17-Q': { totalNumberOfDataCodewords: 367, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 22, NumberOfBlocksInGroup2: 15, NumberOfDataCodewordsInEachBlocksOfGroup2: 23 },
  '17-H': { totalNumberOfDataCodewords: 283, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 14, NumberOfBlocksInGroup2: 17, NumberOfDataCodewordsInEachBlocksOfGroup2: 15 },

  '18-L': { totalNumberOfDataCodewords: 721, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 5, NumberOfDataCodewordsInEachBlocksOfGroup1: 120, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 121 },
  '18-M': { totalNumberOfDataCodewords: 563, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 9, NumberOfDataCodewordsInEachBlocksOfGroup1: 43, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 44 },
  '18-Q': { totalNumberOfDataCodewords: 397, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 22, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 23 },
  '18-H': { totalNumberOfDataCodewords: 313, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 14, NumberOfBlocksInGroup2: 19, NumberOfDataCodewordsInEachBlocksOfGroup2: 15 },

  '19-L': { totalNumberOfDataCodewords: 795, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 113, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 114 },
  '19-M': { totalNumberOfDataCodewords: 627, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 44, NumberOfBlocksInGroup2: 11, NumberOfDataCodewordsInEachBlocksOfGroup2: 45 },
  '19-Q': { totalNumberOfDataCodewords: 445, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 21, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 22 },
  '19-H': { totalNumberOfDataCodewords: 341, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 9, NumberOfDataCodewordsInEachBlocksOfGroup1: 13, NumberOfBlocksInGroup2: 16, NumberOfDataCodewordsInEachBlocksOfGroup2: 14 },

  '20-L': { totalNumberOfDataCodewords: 861, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 107, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 108 },
  '20-M': { totalNumberOfDataCodewords: 669, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 41, NumberOfBlocksInGroup2: 13, NumberOfDataCodewordsInEachBlocksOfGroup2: 42 },
  '20-Q': { totalNumberOfDataCodewords: 485, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 15, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '20-H': { totalNumberOfDataCodewords: 385, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 15, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 10, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '21-L': { totalNumberOfDataCodewords: 932, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 116, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 117 },
  '21-M': { totalNumberOfDataCodewords: 714, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 42 },
  '21-Q': { totalNumberOfDataCodewords: 512, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 22, NumberOfBlocksInGroup2: 6, NumberOfDataCodewordsInEachBlocksOfGroup2: 23 },
  '21-H': { totalNumberOfDataCodewords: 406, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 19, NumberOfDataCodewordsInEachBlocksOfGroup1: 16, NumberOfBlocksInGroup2: 6, NumberOfDataCodewordsInEachBlocksOfGroup2: 17 },

  '22-L': { totalNumberOfDataCodewords: 1006, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 111, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 112 },
  '22-M': { totalNumberOfDataCodewords: 782, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 46 },
  '22-Q': { totalNumberOfDataCodewords: 568, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 7, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 16, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '22-H': { totalNumberOfDataCodewords: 442, ecCodewordsPerBlock: 24, NumberOfBlocksInGroup1: 34, NumberOfDataCodewordsInEachBlocksOfGroup1: 13 },

  '23-L': { totalNumberOfDataCodewords: 1094, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 121, NumberOfBlocksInGroup2: 5, NumberOfDataCodewordsInEachBlocksOfGroup2: 122 },
  '23-M': { totalNumberOfDataCodewords: 860, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 47, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 48 },
  '23-Q': { totalNumberOfDataCodewords: 614, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 11, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '23-H': { totalNumberOfDataCodewords: 464, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 16, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '24-L': { totalNumberOfDataCodewords: 1174, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 6, NumberOfDataCodewordsInEachBlocksOfGroup1: 117, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 118 },
  '24-M': { totalNumberOfDataCodewords: 914, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 6, NumberOfDataCodewordsInEachBlocksOfGroup1: 45, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 46 },
  '24-Q': { totalNumberOfDataCodewords: 664, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 11, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 16, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '24-H': { totalNumberOfDataCodewords: 514, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 30, NumberOfDataCodewordsInEachBlocksOfGroup1: 16, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 17 },

  '25-L': { totalNumberOfDataCodewords: 1276, ecCodewordsPerBlock: 26, NumberOfBlocksInGroup1: 8, NumberOfDataCodewordsInEachBlocksOfGroup1: 106, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 107 },
  '25-M': { totalNumberOfDataCodewords: 1000, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 8, NumberOfDataCodewordsInEachBlocksOfGroup1: 47, NumberOfBlocksInGroup2: 13, NumberOfDataCodewordsInEachBlocksOfGroup2: 48 },
  '25-Q': { totalNumberOfDataCodewords: 718, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 7, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 22, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '25-H': { totalNumberOfDataCodewords: 538, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 22, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 13, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '26-L': { totalNumberOfDataCodewords: 1370, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 10, NumberOfDataCodewordsInEachBlocksOfGroup1: 114, NumberOfBlocksInGroup2: 2, NumberOfDataCodewordsInEachBlocksOfGroup2: 115 },
  '26-M': { totalNumberOfDataCodewords: 1062, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 19, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '26-Q': { totalNumberOfDataCodewords: 754, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 28, NumberOfDataCodewordsInEachBlocksOfGroup1: 22, NumberOfBlocksInGroup2: 6, NumberOfDataCodewordsInEachBlocksOfGroup2: 23 },
  '26-H': { totalNumberOfDataCodewords: 596, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 33, NumberOfDataCodewordsInEachBlocksOfGroup1: 16, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 17 },

  '27-L': { totalNumberOfDataCodewords: 1468, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 8, NumberOfDataCodewordsInEachBlocksOfGroup1: 122, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 123 },
  '27-M': { totalNumberOfDataCodewords: 1128, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 22, NumberOfDataCodewordsInEachBlocksOfGroup1: 45, NumberOfBlocksInGroup2: 3, NumberOfDataCodewordsInEachBlocksOfGroup2: 46 },
  '27-Q': { totalNumberOfDataCodewords: 808, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 8, NumberOfDataCodewordsInEachBlocksOfGroup1: 23, NumberOfBlocksInGroup2: 26, NumberOfDataCodewordsInEachBlocksOfGroup2: 24 },
  '27-H': { totalNumberOfDataCodewords: 628, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 12, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 28, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '28-L': { totalNumberOfDataCodewords: 1531, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 117, NumberOfBlocksInGroup2: 10, NumberOfDataCodewordsInEachBlocksOfGroup2: 118 },
  '28-M': { totalNumberOfDataCodewords: 1193, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 3, NumberOfDataCodewordsInEachBlocksOfGroup1: 45, NumberOfBlocksInGroup2: 23, NumberOfDataCodewordsInEachBlocksOfGroup2: 46 },
  '28-Q': { totalNumberOfDataCodewords: 871, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 31, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '28-H': { totalNumberOfDataCodewords: 661, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 11, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 31, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '29-L': { totalNumberOfDataCodewords: 1631, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 7, NumberOfDataCodewordsInEachBlocksOfGroup1: 116, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 117 },
  '29-M': { totalNumberOfDataCodewords: 1267, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 21, NumberOfDataCodewordsInEachBlocksOfGroup1: 45, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 46 },
  '29-Q': { totalNumberOfDataCodewords: 911, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 1, NumberOfDataCodewordsInEachBlocksOfGroup1: 23, NumberOfBlocksInGroup2: 37, NumberOfDataCodewordsInEachBlocksOfGroup2: 24 },
  '29-H': { totalNumberOfDataCodewords: 701, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 19, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 26, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '30-L': { totalNumberOfDataCodewords: 1735, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 5, NumberOfDataCodewordsInEachBlocksOfGroup1: 115, NumberOfBlocksInGroup2: 10, NumberOfDataCodewordsInEachBlocksOfGroup2: 116 },
  '30-M': { totalNumberOfDataCodewords: 1373, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 19, NumberOfDataCodewordsInEachBlocksOfGroup1: 47, NumberOfBlocksInGroup2: 10, NumberOfDataCodewordsInEachBlocksOfGroup2: 48 },
  '30-Q': { totalNumberOfDataCodewords: 985, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 15, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 25, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '30-H': { totalNumberOfDataCodewords: 745, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 23, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 25, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '31-L': { totalNumberOfDataCodewords: 1843, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 13, NumberOfDataCodewordsInEachBlocksOfGroup1: 115, NumberOfBlocksInGroup2: 3, NumberOfDataCodewordsInEachBlocksOfGroup2: 116 },
  '31-M': { totalNumberOfDataCodewords: 1455, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 29, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '31-Q': { totalNumberOfDataCodewords: 1033, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 42, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '31-H': { totalNumberOfDataCodewords: 793, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 23, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 28, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '32-L': { totalNumberOfDataCodewords: 1955, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 115 },
  '32-M': { totalNumberOfDataCodewords: 1541, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 10, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 23, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '32-Q': { totalNumberOfDataCodewords: 1115, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 10, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 35, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '32-H': { totalNumberOfDataCodewords: 845, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 19, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 35, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '33-L': { totalNumberOfDataCodewords: 2071, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 115, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 116 },
  '33-M': { totalNumberOfDataCodewords: 1631, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 14, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 21, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '33-Q': { totalNumberOfDataCodewords: 1171, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 29, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 19, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '33-H': { totalNumberOfDataCodewords: 901, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 11, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 46, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '34-L': { totalNumberOfDataCodewords: 2191, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 13, NumberOfDataCodewordsInEachBlocksOfGroup1: 115, NumberOfBlocksInGroup2: 6, NumberOfDataCodewordsInEachBlocksOfGroup2: 116 },
  '34-M': { totalNumberOfDataCodewords: 1725, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 14, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 23, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '34-Q': { totalNumberOfDataCodewords: 1231, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 44, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '34-H': { totalNumberOfDataCodewords: 961, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 59, NumberOfDataCodewordsInEachBlocksOfGroup1: 16, NumberOfBlocksInGroup2: 1, NumberOfDataCodewordsInEachBlocksOfGroup2: 17 },

  '35-L': { totalNumberOfDataCodewords: 2306, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 12, NumberOfDataCodewordsInEachBlocksOfGroup1: 121, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 122 },
  '35-M': { totalNumberOfDataCodewords: 1812, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 12, NumberOfDataCodewordsInEachBlocksOfGroup1: 47, NumberOfBlocksInGroup2: 26, NumberOfDataCodewordsInEachBlocksOfGroup2: 48 },
  '35-Q': { totalNumberOfDataCodewords: 1286, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 39, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '35-H': { totalNumberOfDataCodewords: 986, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 22, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 41, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '36-L': { totalNumberOfDataCodewords: 2434, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 6, NumberOfDataCodewordsInEachBlocksOfGroup1: 121, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 122 },
  '36-M': { totalNumberOfDataCodewords: 1914, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 6, NumberOfDataCodewordsInEachBlocksOfGroup1: 47, NumberOfBlocksInGroup2: 34, NumberOfDataCodewordsInEachBlocksOfGroup2: 48 },
  '36-Q': { totalNumberOfDataCodewords: 1354, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 46, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 10, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '36-H': { totalNumberOfDataCodewords: 1054, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 2, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 64, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '37-L': { totalNumberOfDataCodewords: 2566, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 17, NumberOfDataCodewordsInEachBlocksOfGroup1: 122, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 123 },
  '37-M': { totalNumberOfDataCodewords: 1992, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 29, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '37-Q': { totalNumberOfDataCodewords: 1426, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 49, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 10, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '37-H': { totalNumberOfDataCodewords: 1096, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 24, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 46, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '38-L': { totalNumberOfDataCodewords: 2702, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 4, NumberOfDataCodewordsInEachBlocksOfGroup1: 122, NumberOfBlocksInGroup2: 18, NumberOfDataCodewordsInEachBlocksOfGroup2: 123 },
  '38-M': { totalNumberOfDataCodewords: 2102, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 13, NumberOfDataCodewordsInEachBlocksOfGroup1: 46, NumberOfBlocksInGroup2: 32, NumberOfDataCodewordsInEachBlocksOfGroup2: 47 },
  '38-Q': { totalNumberOfDataCodewords: 1502, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 48, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 14, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '38-H': { totalNumberOfDataCodewords: 1142, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 42, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 32, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '39-L': { totalNumberOfDataCodewords: 2812, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 20, NumberOfDataCodewordsInEachBlocksOfGroup1: 117, NumberOfBlocksInGroup2: 4, NumberOfDataCodewordsInEachBlocksOfGroup2: 118 },
  '39-M': { totalNumberOfDataCodewords: 2216, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 40, NumberOfDataCodewordsInEachBlocksOfGroup1: 47, NumberOfBlocksInGroup2: 7, NumberOfDataCodewordsInEachBlocksOfGroup2: 48 },
  '39-Q': { totalNumberOfDataCodewords: 1582, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 43, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 22, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '39-H': { totalNumberOfDataCodewords: 1222, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 10, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 67, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },

  '40-L': { totalNumberOfDataCodewords: 2956, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 19, NumberOfDataCodewordsInEachBlocksOfGroup1: 118, NumberOfBlocksInGroup2: 6, NumberOfDataCodewordsInEachBlocksOfGroup2: 119 },
  '40-M': { totalNumberOfDataCodewords: 2334, ecCodewordsPerBlock: 28, NumberOfBlocksInGroup1: 18, NumberOfDataCodewordsInEachBlocksOfGroup1: 47, NumberOfBlocksInGroup2: 31, NumberOfDataCodewordsInEachBlocksOfGroup2: 48 },
  '40-Q': { totalNumberOfDataCodewords: 1666, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 34, NumberOfDataCodewordsInEachBlocksOfGroup1: 24, NumberOfBlocksInGroup2: 34, NumberOfDataCodewordsInEachBlocksOfGroup2: 25 },
  '40-H': { totalNumberOfDataCodewords: 1276, ecCodewordsPerBlock: 30, NumberOfBlocksInGroup1: 20, NumberOfDataCodewordsInEachBlocksOfGroup1: 15, NumberOfBlocksInGroup2: 61, NumberOfDataCodewordsInEachBlocksOfGroup2: 16 },
};

function getVersionKey(version: number, qrErrorLevel: ErrorCorrectionType): string {
  return `${version}-${ErrorCorrectionType[qrErrorLevel]}`;
}

export function getTotalNumberOfDataCodewords(version: number, qrErrorLevel: ErrorCorrectionType): number {
  return blockInformations[getVersionKey(version, qrErrorLevel)]?.totalNumberOfDataCodewords;
}

export function getEcCodewordsPerBlock(version: number, qrErrorLevel: ErrorCorrectionType): number {
  return blockInformations[getVersionKey(version, qrErrorLevel)]?.ecCodewordsPerBlock;
}

export function getNumberOfBlocksInGroup1(version: number, qrErrorLevel: ErrorCorrectionType): number {
  return blockInformations[getVersionKey(version, qrErrorLevel)]?.NumberOfBlocksInGroup1;
}

export function getNumberOfDataCodewordsInEachBlocksOfGroup1(version: number, qrErrorLevel: ErrorCorrectionType): number {
  return blockInformations[getVersionKey(version, qrErrorLevel)]?.NumberOfDataCodewordsInEachBlocksOfGroup1;
}

export function getNumberOfBlocksInGroup2(version: number, qrErrorLevel: ErrorCorrectionType): number {
  return blockInformations[getVersionKey(version, qrErrorLevel)]?.NumberOfBlocksInGroup2 || 0;
}

export function getNumberOfDataCodewordsInEachBlocksOfGroup2(version: number, qrErrorLevel: ErrorCorrectionType): number {
  return blockInformations[getVersionKey(version, qrErrorLevel)]?.NumberOfDataCodewordsInEachBlocksOfGroup2 || 0;
}