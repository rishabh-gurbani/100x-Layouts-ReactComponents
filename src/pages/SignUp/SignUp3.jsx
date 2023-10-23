import SignUpHeader from "../../components/SignUpHeader"
import TextInputField from "../../components/TextInputField"
import Button from "../../components/Button"

function SignUp3() {
  return (
    <>
    <SignUpHeader step="3" total="4"/>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-2">We sent you a code</h1>
        <p className="text-sm text-dob-text mb-10">Enter it below to verify janedoe@gmail.com</p>
        <form className="w-full mb-3">
            <TextInputField fieldName="Verification Code"/>
        </form>
        <div className="text-twitter-blue self-end text-sm">
            Didn't receive a code?  
        </div>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
        <a href="#">
            <Button  size="xl" text="Next"/>
        </a>
    </section>
    </>
  )
}

export default SignUp3