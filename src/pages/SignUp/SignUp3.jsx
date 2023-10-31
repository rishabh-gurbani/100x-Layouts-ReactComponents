import TextInputField from "../../components/SignUp/TextInputField";
import Button from "../../components/Button";
import {useContext, useState} from "react";
import SignupFlowContext from "./SignupFlowContext.jsx";
import FormInputsContext from "./FormInputsContext.jsx";

function SignUp3() {
    const [signupFlow, setSignupFlow] = useContext(SignupFlowContext);
    const [formInputs, setFormInputs] = useContext(FormInputsContext);
    const [verificationCode, setVerificationCode] = useState('');

    return (
    <>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-2">We sent you a code</h1>
        <p className="text-sm text-dob-text mb-10">Enter it below to verify {formInputs.email}</p>
        <form className="w-full mb-3">
            <TextInputField fieldName="Verification Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} autoFocus={true}/>
        </form>
        <div className="text-twitter-blue self-end text-sm">
            Didn't receive a code?
        </div>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
        <Button variant="default" size="xl" text="Next" disabled={!(verificationCode.length===6)} onClick={()=>
            {setSignupFlow({...signupFlow, currentStep: signupFlow.currentStep+1})}
        }/>
    </section>
    </>
  )
}

export default SignUp3
