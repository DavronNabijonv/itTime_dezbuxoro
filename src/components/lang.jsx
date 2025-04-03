import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TextTranslation({txt}) {
    const {t} = useTranslation();
  return (
    <p>{t(txt)}</p>
  )
}
