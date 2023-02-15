import { emojiDetective, emojiRobot, emojiWritingHand, webpSquidgame } from "../assets/images/images";
import Bubble from "../components/Bubble";
import InstructionStep from "../components/InstructionStep";
import Search from "./Search";

const Landing = () => {  
  return (
    <>
    <Bubble>
      <img src={webpSquidgame.src} alt={webpSquidgame.alt} className="rounded-lg shadow w-full" />
    </Bubble>
    <Search />
    <Bubble className="flex flex-col md:flex-row md:items-center gap-4 my-4">
      <div className="w-full text-2xl ph:text-3xl leading-tight text-neutral-800 font-Recursive font-[800] text-center whitespace-nowrap">AI can guess<br />what you would give<br />for rating a movie?</div>
      <div className="w-full flex flex-col items-center gap-1">
        <InstructionStep emoji={emojiDetective} text={"Find a movie"} />
        <InstructionStep emoji={emojiWritingHand} text={"List your thoughts"} />
        <InstructionStep emoji={emojiRobot} text={"AI will guess your rating and even revise your review fancier!"} />
      </div>
    </Bubble>
    </>
  )
}

export default Landing;