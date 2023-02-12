import { emojiRobot, emojiStar } from "../../assets/images/images";
import Bubble from "../../components/Bubble";

type Props = {
  predictedRating?: number,
}

const AnnouncePredicted = ({ predictedRating: predictedRating }: Props) => {
  if (predictedRating == null) return null;
  return(
    <div className="flex flex-col items-center">
      <img src={emojiRobot.src} alt={emojiRobot.alt} className="w-[10em] -mb-[4.5em]" />
      <Bubble className="bg-black/[0.1] backdrop-blur relative flex flex-col p-8 gap-8 items-center text-xl ph:text-2xl">
        <div className="font-[500] text-[0.7em] text-neutral-700">AI guesses you would give</div>
        <div className="font-[700] text-[8em] leading-[0.7em] tracking-tighter mr-4">{predictedRating}</div>
        <div className="flex items-center">
          {[...Array(Math.floor(predictedRating/2))].map((number, index)=> (<div key={index}><img src={emojiStar.src} alt={emojiStar.alt} className="inline-flex w-[2em]" /></div>))}
          {predictedRating % 2 > 0 && <img src={emojiStar.src} alt={emojiStar.alt} className="inline-flex w-[1em] h-[1em]" />}
        </div>
        <div className="font-[500] text-[0.7em] text-neutral-700">Don't miss your review AI revised!</div>
      </Bubble>
    </div>
  );
}

export default AnnouncePredicted;
