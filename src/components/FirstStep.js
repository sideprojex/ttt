import React, { useContext } from "react"
import { Button, TextField, Container, Box, Grid } from "@material-ui/core"
import { multiStepContext } from "../context/StepContext"

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <Container>
      <div>
        <TextField
          id="email"
          label="Email Address"
          type="email"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["emailAddress"]}
          onChange={e =>
            setUserData({ ...userData, emailAddress: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="name"
          label="Name"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["name"]}
          onChange={e => setUserData({ ...userData, name: e.target.value })}
        />
      </div>
      <div>
        <TextField
          id="number"
          label="Phone Number"
          type="number"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["phone"]}
          onChange={e => setUserData({ ...userData, phone: e.target.value })}
        />
      </div>
      <div>
        <TextField
          id="companyname"
          label="Company Name"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["companyname"]}
          onChange={e =>
            setUserData({ ...userData, companyname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="About the company"
          label="About the company"
          multiline
          rows={2}
          rowsMax={4}
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["compinfo"]}
          onChange={e => setUserData({ ...userData, compinfo: e.target.value })}
        />
      </div>
      <Grid container>
        <Grid item sm={6}>
          <Box m={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setStep(1)}
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
              onClick={() => setStep(3)}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FirstStep
