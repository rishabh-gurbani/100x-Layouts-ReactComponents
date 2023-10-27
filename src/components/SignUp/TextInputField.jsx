import PropTypes from 'prop-types'
import Check from "../../assets/images/signup-screen/valid.svg"
import EyeIcon from "../../assets/images/signup-screen/eye.svg"

export default function TextInputField({
  fieldName="Field Name", 
  isCheck=false, 
  isPassword=false, 
  outline="default", 
  font="default"
}) {

  // TODO: make isCheck as isValid and make it a state and not prop, add validation logic

  const outlineStyle = {
    default: 500,
    dark: 700,
  }

  const fontStyle = {
    light: " ",
    default: "xl",
  }
  
  const checkMark = isCheck ? 
    <img src={Check} className="invisible peer-valid:visible peer-invalid:invisible"/>
    : <></>;

  const typeOfField = isPassword ? "password" : "text";

  const hidePasswordIcon = isPassword ? <img src={EyeIcon} /> : <></>;

  return (
    <fieldset className={"w-full px-3 py-2 border border-neutral-"+outlineStyle[outline]+" rounded focus-within:border-twitter-blue group"}>
        <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
        <div className="px-0.5  group-focus-within:px-1">
            {fieldName}
        </div>
        </legend>
        <div className="flex justify-around">
          <input type={typeOfField} placeholder={fieldName} className={'w-full text-'+fontStyle[font]+' peer bg-inherit focus:outline-none text-neutral-50 placeholder:text-neutral-500'} />
          {checkMark}
          {hidePasswordIcon}
        </div>
    </fieldset>
  )
}

TextInputField.propTypes = {
  fieldName: PropTypes.string.isRequired, 
  isCheck: PropTypes.bool, 
  isPassword: PropTypes.bool, 
  outline: PropTypes.oneOf(['default', 'dark']), 
  font: PropTypes.oneOf(['light', 'default'])
}
