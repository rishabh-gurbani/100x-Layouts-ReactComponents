import OptionPicker from "../../components/OptionPicker"
import SignUpHeader from "../../components/SignUpHeader"
import TextInputField from "../../components/TextInputField"
import Button from "../../components/Button"

function SignUp1() {

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
    
    const dates = Array.from({ length: 31 }, (_, index) => index + 1);
    
    const years = Array.from({ length: 16 }, (_, index) => 2015 - index);

    return (
        <>
        <SignUpHeader step="1" total="4"/>
        <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
            <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
            <form className="w-full flex flex-col gap-8">
                <TextInputField fieldName="Name"/>
                <TextInputField fieldName="Email"/>
                <section className="">
                    <h2 className="font-bold">Date of birth</h2>
                    <p className="text-sm text-dob-text">This will not be shown publicly. Confirm your own age, even if this account is for a 
                    business, a pet, or something else.</p>
                </section>
                <section className="flex">
                    <OptionPicker name="Month" options={months} size="full"/>
                    <OptionPicker name="Day" options={dates} size="min"/>
                    <OptionPicker name="Year" options={years} size="min"/>
                </section>
            </form>
        </main>
        <section className="flex flex-col mx-4 my-5 px-5 justify-end">
            <a href="#">
                <Button variant="default" size="xl" text="Create account"/>
            </a>
        </section>
    </>
    )
}

export default SignUp1