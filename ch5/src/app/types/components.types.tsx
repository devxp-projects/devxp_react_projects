import React from "react"

export type InputProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => void
    inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
    placeholder: string
    padding?: string
    border?: string
    borderRadius?: number
    width?: string
    maxWidth?: string
}

export type CardProps = {
    title: string
    date: string
    voucherDiscount: string
    deadline: string
    fundedPortion: string
    bgImage: string
    countDown: {
        days: string,
        hours: string,
        minutes: string,
    },
    timeBg: string,
    approved: number,
    pending: number,
    rejected: number,
}