import { Box, Button, Checkbox } from "@material-ui/core"
import React, { useContext } from "react"
import { multiStepContext } from "../context/StepContext"

const TermsStepper = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <div className="terms-conditions">
      <p>
        oerwqhnlqwernefnoweqrlfkrqenlkregn
      </p>
      <Checkbox
        // checked={checked}
        // onChange={handleChange}
        checked={userData["isChecked"]}
        onChange={e =>
          setUserData({ ...userData, isChecked: e.target.checked })
        }
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Box m={3}>
        <Button variant="contained" color="primary" onClick={() => setStep(2)}>
          Next
        </Button>
      </Box>
    </div>
  )
}

export default TermsStepper
