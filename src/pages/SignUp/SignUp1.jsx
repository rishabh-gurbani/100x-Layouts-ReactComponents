import { useContext, useState } from "react";
import PropTypes from "prop-types";
import OptionPicker from "../../components/SignUp/OptionPicker";
import TextInputField from "../../components/SignUp/TextInputField";
import Button from "../../components/Button";
import SignupFlowContext from "../../context/SignupFlowContext.jsx";
import { FormInputsContext } from "../../context/FormInputsContext.jsx";
import { validateUsername, validateEmail } from "../../utils/FormValidation.js";

function SignUp1() {

    const [signupFlow, setSignupFlow] = useContext(SignupFlowContext);
    const [formInputs, setFormInputs] = useContext(FormInputsContext);

    const [inputErrors, setInputErrors] = useState(
        {
            name: [false, ''],
            email: [false, ''],
        }
    );

    const validationFunction = {
        name: validateUsername,
        email: validateEmail,
    }

    const handleFormInputChange = (e) => {
        const inputFieldName = e.target.name.toLowerCase();
        setFormInputs({...formInputs, [inputFieldName]: e.target.value});
        const isValid = validationFunction[inputFieldName](e.target.value);
        setInputErrors({...inputErrors, [inputFieldName]: [!isValid[0], isValid[1]]});
    }

    const months = [
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
    ];

    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    const years = Array.from({ length: 16 }, (_, index) => 2015 - index);

    const canMoveToNextStep = () => {
        return validateUsername(formInputs.name)[0] && validateEmail(formInputs.email)[0];
    };

    const focusField = signupFlow.focusField;

    return (
        <>
        <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
            <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
            <form className="w-full flex flex-col gap-8">
                <TextInputField fieldName="Name" value={formInputs.name} onChange={handleFormInputChange} autoFocus={focusField==="Name"} errorMessage={inputErrors.name[0] ? inputErrors.name[1] : ""}/>
                <TextInputField fieldName="Email" value={formInputs.email} onChange={handleFormInputChange} autoFocus={focusField==="Email"} errorMessage={inputErrors.email[0] ? inputErrors.email[1] : ""}/>
                <section className="">
                    <h2 className="font-bold">Date of birth</h2>
                    <p className="text-sm text-dob-text">This will not be shown publicly. Confirm your own age, even if this account is for a 
                    business, a pet, or something else.</p>
                </section>
                <section className="flex">
                    <OptionPicker name="Month" options={months} value={formInputs.month} onChange={handleFormInputChange} autoFocus={focusField==="Date of birth"} size="full" />
                    <OptionPicker name="Day" options={days} value={formInputs.day} onChange={handleFormInputChange} size="min"/>
                    <OptionPicker name="Year" options={years} value={formInputs.year} onChange={handleFormInputChange} size="min"/>
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
