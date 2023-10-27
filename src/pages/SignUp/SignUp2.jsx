import SignUpHeader from "../../components/SignUp/SignUpHeader"
import TextInputField from "../../components/SignUp/TextInputField"
import Button from "../../components/Button"

function SignUp2() {
  return (
    <>
    <SignUpHeader currentStep="2" totalSteps="4"/>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
        <form className="w-full flex flex-col gap-8">
            <TextInputField fieldName="Name" isCheck={true}/>
            <TextInputField fieldName="Email" isCheck={true}/>
            <TextInputField fieldName="Date of birth" isCheck={true}/>
        </form>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
        <a href="#">
            <Button variant="primary" size="xl" text="Sign up"/>
        </a>
    </section>
    </>
  )
}

export default SignUp2