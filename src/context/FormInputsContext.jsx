import { createContext, useState } from "react";

const initFormInputs = {
    name: "",
    email: "",
    day: "1",
    month: "January",
    year: "2015",
}

const FormInputsContext = createContext(null);

const FormInputsContextProvider = ({children}) => {
    const [formInputs, setFormInputs] = useState(initFormInputs);

    return (
        <FormInputsContext.Provider value={[formInputs, setFormInputs]}>
            {children}
        </FormInputsContext.Provider>
    )

}

export { FormInputsContext, FormInputsContextProvider };
