import SignUpX from "../assets/images/signup-screen/signup-x.svg"

export default function SignUpHeader({step, total}) {
  return (
    <header className="flex justify-start py-3 px-4 mb-3">
        <a href="./LoginScreen1.html">
        <img src={SignUpX} className="mr-5" />
        </a>
        <span className="font-bold"> Step {step} of {total} </span>
    </header>
  )
}
