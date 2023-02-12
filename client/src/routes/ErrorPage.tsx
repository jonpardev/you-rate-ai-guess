import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { emojiWearyCat } from "../assets/images/images";
import Bubble from "../components/Bubble";

type StateType = {
  message?: string,
}

const ErrorPage = () => {
  const { state }: { state: StateType } = useLocation();
  const { message } = state ?? {};
  
  return (
    <>
    <Bubble className="text-center">
      <span className="text-black text-2xl font-[800]">You've got an error!</span>
      <br />
      <img src={emojiWearyCat.src} alt={emojiWearyCat.alt} className="inline-block" />
    </Bubble>
    {message != null && (
    <Bubble className="bg-neutral-200 rounded-lg p-6">
      <span className="text-black text-xl font-[700]">What just happened?</span>
      <ul className="list-disc list-outside mt-3 pl-6 text-neutral-700">
        <li>{message}</li>
        <li>Your mobile or wi-fi network is maybe unstable.</li>
        <li>Our server might be a bit under the weather.</li>
        <li>...Or it was just because of that the developer who made this did not his job so well.</li>
      </ul>
    </Bubble>
    )}
    <Bubble className="text-center mt-8">
      <Link to="/" className="inline-block px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-[800] rounded-lg">Go Back to Main</Link>
    </Bubble>
    </>
  )
}

export default ErrorPage;