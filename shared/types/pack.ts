// 礼包数据类型定义

export interface PackUnits {
  stone: {
    zh: string
    en: string
  }
  pull: {
    zh: string
    en: string
  }
}

export interface PackValueMetrics {
  stoneEquivalent: number
  pricePerStone: number
  totalPulls: number
  pricePerPull: number
  units: PackUnits
}

export interface ComparisonBar {
  labelZH: string
  labelEN: string
  percentage: string
  widthPx: number
  display?: boolean
}

export interface PackContent {
  name: string
  quantity: number
  totalValue: number
  percentage: string
  iconClass: string
}

export interface PackData {
  packDisplayNameZH: string
  packDisplayNameEN: string
  price: string
  imageUrl: string
  valueMetrics: PackValueMetrics
  comparisonBars: ComparisonBar[]
  countdownDays: number
  countdownZH: string
  countdownEN: string
  contents: PackContent[]
}

