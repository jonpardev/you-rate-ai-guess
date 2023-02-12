import { SvgTmdb } from "../assets/images/images";

const TmdvLinkWithLogo = () => {
  return (<a href="https://www.themoviedb.org"><img src={SvgTmdb.src} alt={SvgTmdb.alt} className="w-[2em] inline-block" /></a>);
}

const TmdbAttribution  = () => {
  return (
    <div className="w-full text-sm text-center leading-tight">
      <span className="inline-block">This website uses <TmdvLinkWithLogo /> API&nbsp;</span>
      <span className="inline-block">but is not endorsed or certified by <TmdvLinkWithLogo />.</span>
    </div>
  )
}

export default TmdbAttribution;