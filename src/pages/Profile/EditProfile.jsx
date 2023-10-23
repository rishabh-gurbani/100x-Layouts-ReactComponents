import ArrowLeft from "../../assets/images/arrow-left.svg"
import CameraIcon from "../../assets/images/photo.svg"
import SignUpXIcon from "../../assets/images/signup-screen/signup-x.svg"
import TextInputField from "../../components/TextInputField"

function Header () {
    return (
        <div className="py-4 px-4 w-full flex justify-between items-center">
            <a href="./UserProfile.html">
                <img src={ArrowLeft} className="mr-5" />
            </a>
            <h1 className="flex flex-grow justify-start font-bold">
                Edit Profile
            </h1>
            <button className="
            bg-neutral-50 text-neutral-1000 h-8 py-3 px-6 rounded-full font-bold
            flex justify-center items-center text-center disabled:opacity-50">
                Save
            </button>
        </div>
    )
}

export default function EditProfile() {
    return (
    <>
        <div>
            <Header />
            <main className="mt-3 px-4">
                <div className="relative mb-2.5">
                    <div className={"bg-coverImage w-full h-52 flex justify-center items-center gap-2"}>
                    <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center">
                        <img src={CameraIcon} />
                    </div>
                    <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center">
                        <img src={SignUpXIcon} />
                    </div>
                    </div>
                    <div className={"bg-profileImage box-content bg-contain w-20 h-20 rounded-full absolute border-4 border-neutral-1000 -bottom-4 left-2.5 flex justify-center items-center"}>
                    <div className="bg-black/60 rounded-full w-8 h-8 flex justify-center items-center">
                        <img src={CameraIcon} />
                    </div>
                    </div>
                </div>
                <form className="my-4 caret-twitter-blue flex flex-col gap-5">
                    <TextInputField fieldName="Name" outline="dark" font="light"/>
                    <fieldset className="w-full px-3 py-2 border border-neutral-700 rounded focus-within:border-twitter-blue group">
                        <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                            <div className="px-0.5  group-focus-within:px-1">
                            Bio
                            </div>
                        </legend>
                        <div className="flex justify-around h-70">
                            <textarea className="bg-inherit w-full h-full text-base focus:outline-none resize-none
                                rounded-md placeholder-neutral-500" placeholder="Bio" defaultValue={""} />
                        </div>
                    </fieldset>
                    <TextInputField fieldName="Location" outline="dark" font="light"/>
                    <TextInputField fieldName="Website" outline="dark" font="light"/>
                </form>
            </main>
        </div>
    </>
  )
}
