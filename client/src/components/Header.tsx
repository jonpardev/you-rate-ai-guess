import { MouseEvent, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SvgUserCircle } from "../assets/images/images";
import { BASE_NAME } from "../config/env";
import { auth } from "../helpers/fiebase";
import { useAppDispatch, useAppSelector } from "../helpers/redux";
import { SignIn } from "./SignIn";

type SignInOutButtonProps = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SignInOutButton = ({ children, onClick }: SignInOutButtonProps) => {
  return(
    <button onClick={onClick}
      className="rounded-lg px-2 py-1 text-white cursor-pointer hover:bg-red-800">
      {children}
    </button>
  );
}

const Header = () => {
  const user = useAppSelector(state => state.user.user);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  const handleClickSignOut = () => {
    auth.signOut().then();
  }

  const handleClickSignIn = () => {
    setIsModalOn(true);
  }

  return (
    <>
    {isModalOn && (
    <SignIn onClickClose={() => setIsModalOn(false)} />
    )}
    <header className="w-full flex justify-center bg-red-700">
      <div className="w-full max-w-3xl grid grid-cols-4 p-4">
        <div>{/* empty */}</div>
        <Link to={`${BASE_NAME}/`} className="text-xl md:text-4xl text-white font-Recursive font-[1000] tracking-tighter select-none flex flex-col items-center col-span-2">
          <div className="leading-[0.85]">You Rate,</div>
          <div className="leading-[0.85]">aI Guess</div>
        </Link>
        <div className="flex justify-end items-center">
        {/*TODO {user != null ? (
        <SignInOutButton onClick={handleClickSignOut}>
          <SvgUserCircle className="inline-block align-middle w-[1.5em] fill-white mb-[0.1rem] mr-2" />
          <span className="max-ph:sr-only">Sign out</span>
        </SignInOutButton>
        ) : (
          <SignInOutButton onClick={handleClickSignIn}>
            <SvgUserCircle className="inline-block align-middle w-[1.5em] fill-white mb-[0.1rem] mr-2" />
            <span className="max-ph:sr-only">Sign in</span>
          </SignInOutButton>
        )} */}
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;