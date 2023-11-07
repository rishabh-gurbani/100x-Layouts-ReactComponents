import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignUpHeader from "../../components/SignUp/SignUpHeader"
import SignupFlowContext from "../../context/SignupFlowContext.jsx";
import { FormInputsContextProvider } from "../../context/FormInputsContext.jsx";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";

const signupFlowState = {
    currentStep: 1,
    focusField: "Name",
}

function SignUp() {

    const navigate = useNavigate();

    const [signupFlow, setSignupFlow] = useState(signupFlowState);

    const signUpSteps = {
        1: <SignUp1 />,
        2: <SignUp2 />,
        3: <SignUp3 />,
        4: <SignUp4 />
    }

    return (
        <SignupFlowContext.Provider value={[signupFlow, setSignupFlow]}>
            <FormInputsContextProvider>
                <SignUpHeader currentStep={`${signupFlow.currentStep}`} totalSteps="4" onClick={()=>
                    signupFlow.currentStep===1 ? navigate('/') : setSignupFlow({
                        ...signupFlow,
                        currentStep: signupFlow.currentStep-1
                    })
                }/>
                {signUpSteps[signupFlow.currentStep]}
            </FormInputsContextProvider>
        </SignupFlowContext.Provider>
    )
}

export default SignUp
