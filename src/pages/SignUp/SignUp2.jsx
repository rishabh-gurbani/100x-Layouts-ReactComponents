import TextInputField from "../../components/SignUp/TextInputField";
import Button from "../../components/Button";
import { useContext } from "react";
import SignupFlowContext from "./SignupFlowContext.jsx";
import FormInputsContext from "./FormInputsContext.jsx";

function SignUp2() {

  const [signupFlow, setSignupFlow] = useContext(SignupFlowContext);
  const [formInputs, setFormInputs] = useContext(FormInputsContext);

  const dob = formInputs.month + " " + formInputs.day + ", " + formInputs.year;

  const onFocus = (e)=> {
      setSignupFlow({currentStep: signupFlow.currentStep - 1, focusField: e.target.name});
  }

  return (
    <>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
        <form className="w-full flex flex-col gap-8">
            <TextInputField fieldName="Name" isCheck={true} value={formInputs.name} onFocus={onFocus}/>
            <TextInputField fieldName="Email" isCheck={true} value={formInputs.email} onFocus={onFocus}/>
            <TextInputField fieldName="Date of birth" isCheck={true} value={dob} onFocus={onFocus}/>
        </form>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
          <Button variant="primary" size="xl" text="Sign up" onClick={()=>{
              setSignupFlow({...signupFlow, currentStep: signupFlow.currentStep+1})
          }}/>
    </section>
    </>
  )
}

export default SignUp2
