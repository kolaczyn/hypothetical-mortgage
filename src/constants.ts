import { FormFields } from './types.ts'

export const formFields = {
  price: 'Cena',
  livingArea: 'Metraż mieszkania w m2',
  savings: 'Oszczędności',
  netIncome: 'Dochód netto',
  expenses: 'Wydatki',
  renovationCostsPerM2: 'Koszty remontu za m2',
} as const

export const formFieldsIds = Object.keys(formFields) as FormFields[]
