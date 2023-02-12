import { CustomImage } from "../assets/images/images";

type Props = {
  emoji: CustomImage,
  text?: string,
}

const InstructionStep = ({ emoji, text }: Props) => {
  return (
    <div className={`w-full rounded-lg bg-neutral-100 flex px-6 py-2 gap-4 items-center select-none`}>
      <img src={emoji.src} alt={emoji.alt} className="w-[2em] ph:w-[2.5em]" />
      <span className="text-neutral-600 text-md ph:text-lg font-[600]">{text}</span>
    </div>
  )
}

export default InstructionStep;