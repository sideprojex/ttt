import React, { useState } from "react"
export const multiStepContext = React.createContext()

const StepContext = ({ children }) => {
  const [currentStep, setStep] = useState(1)
  const [userData, setUserData] = useState([])
  const [finalData, setFinalData] = useState([])

  const submitData = () => {
    setFinalData(finalData => [...finalData, userData])
    setUserData("")
    setStep(1)
  }

  return (
    <multiStepContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      {children}
    </multiStepContext.Provider>
  )
}

export default StepContext
