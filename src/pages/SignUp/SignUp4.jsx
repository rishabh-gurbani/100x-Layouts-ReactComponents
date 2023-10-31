import TextInputField from "../../components/SignUp/TextInputField"
import Button from "../../components/Button"
import {
  useNavigate,
} from "react-router-dom";
import {useState} from "react";

function SignUp4() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    return (
    <>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-2">You’ll need a password</h1>
        <p className="text-sm text-dob-text mb-10">Make sure it’s 8 characters or more</p>
        <form className="w-full mb-3">
            <TextInputField fieldName="Password" isPassword={true} passwordVisible={passwordVisible}
                            showPasswordAction={()=>setPasswordVisible(!passwordVisible)}/>
        </form>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
          <Button variant="default" size="xl" text="Next" onClick={()=>{
                navigate('/home')}}/>
    </section>
    </>
    )
}

export default SignUp4
