import React, { useContext, useState } from "react"
import { multiStepContext } from "../context/StepContext"

import {
  Button,
  TextField,
  Container,
  FormControl,
  Box,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core"

const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  const [productsandservices] = useState(["1-5", "5-10", "10-5"])

  const [presence] = useState(["Yes", "No"])

  return (
    <Container>
      <div>
        <TextField
          id="brandcolor"
          label="Brand Preferred colours, if possible please provide the HEX code."
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["brandColor"]}
          InputLabelProps={{ shrink: true }}
          onChange={e =>
            setUserData({ ...userData, brandColor: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="brandtagline"
          label="Brand Tagline"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["brandTagLine"]}
          onChange={e =>
            setUserData({ ...userData, brandTagLine: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="brandquestion1"
          label="What are your products or services?"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["services"]}
          onChange={e => setUserData({ ...userData, services: e.target.value })}
        />
      </div>
      <div>
        <Grid item>
          <FormControl>
            <Box m={2}>
              <p>Number of products or services</p>
            </Box>
            <Select
              value={userData["numberofservicesandproducts"]}
              onChange={e =>
                setUserData({
                  ...userData,
                  numberofservicesandproducts: e.target.value,
                })
              }
              margin="dense"
            >
              {productsandservices.map((value, index) => {
                return (
                  <MenuItem value={value} key={index}>
                    {value}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
      </div>
      <div>
        <Grid item>
          <FormControl>
            <Box m={2}>
              <p>Do you have an existing social media presence?</p>
            </Box>
            <Select
              value={userData["presence"]}
              onChange={e =>
                setUserData({ ...userData, presence: e.target.value })
              }
              margin="dense"
            >
              {presence.map((value, index) => {
                return (
                  <MenuItem value={value} key={index}>
                    {value}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
      </div>

      <Grid container>
        <Grid item sm={6}>
          <Box m={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setStep(2)}
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
              onClick={() => setStep(4)}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SecondStep
