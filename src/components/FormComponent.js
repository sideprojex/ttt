import React, { useContext, useEffect, useState } from "react"
import FirstStep from "./FirstStep"
import FourthStep from "./FourthStep"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep"
import { multiStepContext } from "../context/StepContext"
import { Stepper, Step, StepLabel, Container, Grid } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/Settings"
import GroupAddIcon from "@material-ui/icons/GroupAdd"
import VideoLabelIcon from "@material-ui/icons/VideoLabel"
import AmpStoriesIcon from "@material-ui/icons/AmpStories"
import ReceiptIcon from "@material-ui/icons/Receipt"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import TermsStepper from "./TermsStepper"

const FormComponent = () => {
  const { currentStep } = useContext(multiStepContext)
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    if (window.innerWidth < 600) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }, [])

  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: "#ccc",
      zIndex: 1,
      color: "#fff",
      width: 50,
      height: 50,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      backgroundColor: "#3f51b5",
    },
    completed: {
      backgroundColor: "#3f51b5",
    },
  })

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles()
    const { active, completed } = props

    const icons = {
      1: <ReceiptIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
      4: <AmpStoriesIcon />,
      5: <SettingsIcon />,
    }

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    )
  }

  const showStep = step => {
    switch (step) {
      case 1:
        return <TermsStepper />
      case 2:
        return <FirstStep />
      case 3:
        return <SecondStep />
      case 4:
        return <ThirdStep />
      case 5:
        return <FourthStep />
      default:
        return alert("error!")
    }
  }

  return (
    <Container>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={1}>
          <Stepper
            orientation={`${toggle ? "vertical" : "horizontal"}`}
            activeStep={currentStep - 1}
            className="my-stepper"
          >
            <Step>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
          </Stepper>
        </Grid>
        <Grid item xs={12} sm={11}>
          {showStep(currentStep)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default FormComponent
