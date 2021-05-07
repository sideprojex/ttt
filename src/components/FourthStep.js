import React, { useContext, useState } from "react"
import {
  Select,
  MenuItem,
  Grid,
  Container,
  FormControl,
  Box,
  TextField,
  Button,
} from "@material-ui/core"
import { multiStepContext } from "../context/StepContext"

const FourthStep = () => {
  const [represent] = useState([
    "Light Hearted",
    "Personable",
    "Aunthentic",
    "Authoritative",
    "Serious",
    "Funny",
    "Inspirational",
    "Informative",
    "Persuasive",
    "Professional",
  ])

  const [secondTone] = useState([
    "Light Hearted",
    "Personable",
    "Aunthentic",
    "Authoritative",
    "Serious",
    "Funny",
    "Inspirational",
    "Informative",
    "Persuasive",
    "Professional",
  ])

  const { setStep, userData, setUserData, submitData } = useContext(
    multiStepContext
  )

  const handleSubmi = () => submitData()

  return (
    <Container>
      <Grid item>
        <FormControl>
          <Box m={2}>
            <p>
              How would you like our tone and manner to represent your brand?
              Pick your first tone
            </p>
          </Box>
          <Select
            value={userData["firstTone"]}
            InputLabelProps={{ shrink: true }}
            onChange={e =>
              setUserData({ ...userData, firstTone: e.target.value })
            }
            margin="dense"
          >
            {represent.map((value, index) => {
              return (
                <MenuItem value={value} key={index}>
                  {value}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <Box m={2}>
            <p>Pick your second tone?</p>
          </Box>
          <Select
            value={userData["secondTone"]}
            onChange={e =>
              setUserData({ ...userData, secondTone: e.target.value })
            }
            margin="dense"
          >
            {secondTone.map((value, index) => {
              return (
                <MenuItem value={value} key={index}>
                  {value}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <div>
        <TextField
          id="competitors"
          label="Your competitors?"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["competitors"]}
          onChange={e =>
            setUserData({ ...userData, competitors: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="missed"
          label="Anything else we've missed asking you?"
          color="secondary"
          fullWidth
          margin="normal"
          value={userData["missedText"]}
          onChange={e =>
            setUserData({ ...userData, missedText: e.target.value })
          }
        />
      </div>
      <Grid container>
        <Grid item sm={6}>
          <Box m={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setStep(4)}
            >
              Back
            </Button>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box m={3}>
            <Button variant="contained" color="primary" onClick={handleSubmi}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FourthStep
