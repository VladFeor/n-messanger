"use client"
import { useState } from "react"
import '../../styles/index.css'
import VerificationForm from "@/components/VetificationForm/VetificationForm"
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm"

export default function Register() {
  const [isVerification, setIsVerification] = useState(false)
  const [isTrueEnteringCode, setIsTrueEnteringCode] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')

  const checkVerificationCode = (isVerificat: boolean) => {
    setIsTrueEnteringCode(isVerificat)
  }
  const changeVerificationCode = (varificationCode: string) => {
    setVerificationCode(varificationCode)
  }
  return (
    <>
      {!isVerification
        ?
        <RegistrationForm changeVerificationCode={changeVerificationCode} changeIsVerificate={() => setIsVerification(true)} />
        :
        <VerificationForm checkVerificationCode={checkVerificationCode} verificationCode={verificationCode} />
      }

    </>
  )
}
