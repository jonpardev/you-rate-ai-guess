import { useState } from "react";
import { emojiRobot } from "../../assets/images/images";
import Bubble from "../../components/Bubble";
import Button from "../../components/Button";
import { SurveyType } from "../../types/movie.type";

type Props = {
  predictedRating?: number;
}

const Survey = ({ predictedRating: predictedRating }: Props) => {
  const [survey, setSurvey] = useState<SurveyType>({
    isCorrect: null,
    realRating: predictedRating ?? 0,
    isSubmitted: false,
  });

  const SurveyBubbleClassName = "bg-neutral-300 p-4 text-center font-[600] flex flex-col gap-8 md:flex-row md:justify-around md:items-center"

  if (predictedRating == null) return null;
  return(
    <div className="w-full flex flex-col gap-1">
      <Bubble className={SurveyBubbleClassName}>
        <div>Our a little <img src={emojiRobot.src} alt={emojiRobot.alt} className="inline w-[2em] align-baseline -mb-[0.6rem]" /> did well?🤔</div>
        <div className="flex gap-16 justify-center">
          <Button onClick={() => setSurvey({...survey, isCorrect: true} satisfies SurveyType)} disabled={survey.isCorrect != null}>Yes</Button>
          <Button onClick={() => setSurvey({...survey, isCorrect: false} satisfies SurveyType)} disabled={survey.isCorrect != null}>No</Button>
        </div>
      </Bubble>
      {survey.isCorrect === false && (
      <Bubble className={SurveyBubbleClassName}>
        <p className="leading-none"><span className="inline-block">That's shame.😔</span> <span className="inline-block">What was your real rating?</span></p>
        <div className="flex gap-8 justify-center items-center">
          <Button className="text-[0.8em]" disabled={(survey.realRating <= 0 || survey.isSubmitted === true)}
            onClick={() => { setSurvey(prevState => ({...prevState, realRating: prevState.realRating - 1} satisfies SurveyType)) }}
            >−</Button>
          <span className="text-2xl">{survey.realRating}</span>
          <Button className="text-[0.8em]" disabled={(survey.realRating >= 10 || survey.isSubmitted === true)}
            onClick={() => { setSurvey(prevState => ({...prevState, realRating: prevState.realRating + 1} satisfies SurveyType)) }}
            >+</Button>
        </div>
        <div><Button disabled={survey.isSubmitted === true}>Submit</Button></div>
      </Bubble>
      )}
      {(survey.isCorrect === true || survey.isSubmitted === true) && (
      <Bubble className={SurveyBubbleClassName}>
        <div>Thank you for telling us!</div>
      </Bubble>
      )}
    </div>
  );
}

export default Survey;