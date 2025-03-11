import { ErrorCorrectionType } from '@/types/errorCorrection-type'

export type QRCapacitiesType = {
  version: number;
  capacities: Record<ErrorCorrectionType, number[]>;
};