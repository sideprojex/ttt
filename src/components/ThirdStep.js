import React, { useContext } from "react"
import { multiStepContext } from "../context/StepContext"
import { Button, TextField, Container, Box, Grid } from "@material-ui/core"

const ThirdStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <Container>
      <div>
        <TextField
          id="sellingpoint"
          label="What is your unique selling point? Why are your customers coming to you?"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["sellingPoint"]}
          InputLabelProps={{ shrink: true }}
          onChange={e =>
            setUserData({ ...userData, sellingPoint: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="sellingpoint"
          label="In-depth Product/Service Information."
          color="secondary"
          fullWidth
          InputLabelProps={{ shrink: true }}
          margin="normal"
          value={userData["productInfo"]}
          onChange={e =>
            setUserData({ ...userData, productInfo: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="sellingpoint"
          label="Pricing Structure for your products/services"
          color="secondary"
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
          value={userData["pricing"]}
          onChange={e => setUserData({ ...userData, pricing: e.target.value })}
        />
      </div>
      <div>
        <TextField
          id="sellingpoint"
          label="Target audience? If possible describe them in detail."
          InputLabelProps={{ shrink: true }}
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["audience"]}
          onChange={e => setUserData({ ...userData, audience: e.target.value })}
        />
      </div>
      <div>
        <TextField
          id="sellingpoint"
          label="What is your brand's vibe and personality?"
          color="secondary"
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
          value={userData["brandVibe"]}
          onChange={e =>
            setUserData({ ...userData, brandVibe: e.target.value })
          }
        />
      </div>
      <Grid container>
        <Grid item sm={6}>
          <Box m={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setStep(3)}
            >
              Back
            </Button>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box m={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setStep(5)}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ThirdStep
