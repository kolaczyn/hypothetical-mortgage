import { formFields } from './constants.ts'

export type FormFields = keyof typeof formFields

export type TMainForm = Record<FormFields, number>
