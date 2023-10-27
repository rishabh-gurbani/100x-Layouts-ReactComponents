import PropTypes from 'prop-types'
import SignUpX from "../../assets/images/signup-screen/signup-x.svg"

export default function SignUpHeader({currentStep="1", totalSteps="1"}) {
  return (
    <header className="flex justify-start py-3 px-4 mb-3">
        <a href="./LoginScreen1.html">
        <img src={SignUpX} className="mr-5" />
        </a>
        <span className="font-bold"> Step {currentStep} of {totalSteps} </span>
    </header>
  )
}

SignUpHeader.propTypes = {
  currentStep: PropTypes.string.isRequired,
  totalSteps: PropTypes.string.isRequired,
}
