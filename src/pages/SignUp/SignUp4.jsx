import {
    useNavigate,
  } from "react-router-dom";
import { useContext, useState } from "react";

import { useAuthService } from "../../context/AuthContext"
import TextInputField from "../../components/SignUp/TextInputField"
import Button from "../../components/Button"
import { FormData } from "../../context/FormDataContext.jsx";

function SignUp4() {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const formData = useContext(FormData);
    const authService = useAuthService();

    return (
    <>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-2">You’ll need a password</h1>
        <p className="text-sm text-dob-text mb-10">Make sure it’s 8 characters or more</p>
        <form className="w-full mb-3">
            <TextInputField fieldName="Password" isPassword={true} passwordVisible={passwordVisible}
                value={password} onChange={(e)=>setPassword(e.target.value)} showPasswordAction={()=>setPasswordVisible(!passwordVisible)}/>
        </form>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
        <Button variant="default" size="xl" text="Next" onClick = {
            async (e) => {
                const data = formData[0];
                console.log(data);
                const {name, email} =  data;
                console.log(name);
                e.target.disabled = true;
                await authService.register({
                    username: name.replace(/\s+/g, '').toLowerCase(),
                    email,
                    password
                })
                navigate('/home');
            }}
        />
    </section>
    </>
    )
}

export default SignUp4
