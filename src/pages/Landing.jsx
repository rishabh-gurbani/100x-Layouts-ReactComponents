import Logo from "../assets/images/logo.svg"
import Button from "../components/Button";

function Header () {
  return (
    <header className="flex justify-center py-3 px-4">
    <img src={Logo} alt="100xLogo" className="w-12 h-auto"/>
    </header>
  );
}

function MainContent () {
  return (
    <main className="flex flex-col px-7 justify-center items-center flex-grow text-neutral-50">
      <section className="flex flex-col self-start">
        <h2 className="text-3xl font-extrabold mb-3">Happening now</h2>
        <h3 className="font-bold">Join today.</h3>
      </section>
      <a href="./LoginScreen2.html" className="my-10 w-full">
        <Button variant="default" size="md" text="Create account"/>
      </a>
      <div className="flex items-center w-full mb-10">
        <div className="flex-grow border border-b border-neutral-700" />
        <div className="mx-1">or</div>
        <div className="flex-grow border border-b border-neutral-700" />
      </div>
      <div className="self-start mb-5">
        Already have an account?
      </div>
      <Button variant="outline" size="md" text="Sign In"/>
    </main>
  )
}

export default function Landing() {
  return (
    <>
        <Header />
        <MainContent />
    </>
  )
}
