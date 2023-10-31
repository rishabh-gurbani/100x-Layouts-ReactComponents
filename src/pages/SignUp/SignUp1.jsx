import OptionPicker from "../../components/SignUp/OptionPicker";
import TextInputField from "../../components/SignUp/TextInputField";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useMemo } from "react";
import SignupFlowContext from "./SignupFlowContext.jsx";
import FormInputsContext from "./FormInputsContext.jsx";
import isFormValid from "../../utils/FormValidation.js";

function SignUp1() {

    const [signupFlow, setSignupFlow] = useContext(SignupFlowContext);
    const [formInputs, setFormInputs] = useContext(FormInputsContext);

    const handleFormChange = (e) => {
        setFormInputs({...formInputs, [e.target.name.toLowerCase()]: e.target.value});
    }

    const months = useMemo(() => [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ], []) ;

    const days = useMemo(()=>Array.from({ length: 31 }, (_, index) => index + 1), []);

    const years = useMemo(()=>Array.from({ length: 16 }, (_, index) => 2015 - index), []);

    const canMoveToNextStep = () => isFormValid(formInputs);

    return (
        <>
        <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
            <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
            <form className="w-full flex flex-col gap-8">
                <TextInputField fieldName="Name" value={formInputs.name} onChange={handleFormChange} autoFocus={signupFlow.focusField==="Name"} />
                <TextInputField fieldName="Email" value={formInputs.email} onChange={handleFormChange} autoFocus={signupFlow.focusField==="Email"}/>
                <section className="">
                    <h2 className="font-bold">Date of birth</h2>
                    <p className="text-sm text-dob-text">This will not be shown publicly. Confirm your own age, even if this account is for a 
                    business, a pet, or something else.</p>
                </section>
                <section className="flex">
                    <OptionPicker name="Month" options={months} value={formInputs.month} onChange={handleFormChange} autoFocus={signupFlow.focusField==="Date of birth"} size="full" />
                    <OptionPicker name="Day" options={days} value={formInputs.day} onChange={handleFormChange} size="min"/>
                    <OptionPicker name="Year" options={years} value={formInputs.year} onChange={handleFormChange} size="min"/>
                </section>
            </form>
        </main>
        <section className="flex flex-col mx-4 my-5 px-5 justify-end">
            <Button disabled={!canMoveToNextStep()} variant="default" size="xl" text="Create account" onClick={()=>{
                setSignupFlow({...signupFlow, currentStep: signupFlow.currentStep+1})
            }}
            />
        </section>
    </>
    )
}

SignUp1.propTypes = {
    setCurrentStep: PropTypes.func,
}

export default SignUp1
