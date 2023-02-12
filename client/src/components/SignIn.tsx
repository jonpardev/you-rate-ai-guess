import { MouseEvent, ReactNode } from "react";
import { SvgLoading } from "../assets/images/images";
import { useSignInWith } from "../helpers/useSignInWith";
import { signInWithGoogle } from "../services/user.service";
import { Modal } from "./Modal"

type WithButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; 
}

const WithButton = ({ children, onClick }: WithButtonProps) => {
  return(
    <button className="w-full h-[3em] rounded-lg bg-white hover:bg-neutral-100 px-4 border border-black" onClick={onClick}>{children}</button>
  );
};

export const SignIn = ({ onClickClose }: { onClickClose?: () => void}) => {
  const [isLoadingGoogle, setIsLoadingGoogle, handleClickGoogle] = useSignInWith(false, handleGoogle);

  function handleGoogle() {
    signInWithGoogle().then()
      .finally(() => {
        if (onClickClose) onClickClose();
      });
  }

  return(
    <Modal>
      <div className="w-full max-w-screen-ph flex flex-col gap-4">
        {onClickClose && (
        <div className="cursor-pointer" onClick={onClickClose}>Close</div>
        )}
        <WithButton onClick={handleClickGoogle}>
          {isLoadingGoogle ? (
            <div className="flex w-full justify-center"><SvgLoading className="w-[1em] stroke-black animate-spin" /></div>
            ) : (
            <div className="flex w-full justify-between items-center">
              <div>Sign In with Google</div>
              <div>{`>`}</div>
            </div>
            )}
        </WithButton>
      </div>
    </Modal>
  );
}