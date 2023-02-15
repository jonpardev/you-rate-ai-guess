import squidgame_webp from './squidgame.webp';
import detective_png from './Detective.png';
import robot_png from './Robot.png';
import writing_hand_png from './Writing Hand.png';
import weary_cat_png from './Weary Cat.png';
import star_png from './Star.png';
import tmdb_svg from './tmdb.svg'

export type CustomImage = {
  src: string,
  alt: string,
}

export const webpSquidgame: CustomImage = {
  src: squidgame_webp,
  alt: 'Would you like to play a game with me? from Squid Game.',
}

export const emojiDetective: CustomImage = {
  src: detective_png,
  alt: 'A detective emoji.',
}

export const emojiRobot: CustomImage = {
  src: robot_png,
  alt: 'A robot emoji.',
}

export const emojiWritingHand: CustomImage = {
  src: writing_hand_png,
  alt: 'A writing hand emoji.',
}

export const emojiWearyCat: CustomImage = {
  src: weary_cat_png,
  alt: 'A weary cat emoji.',
}

export const emojiStar: CustomImage = {
  src: star_png,
  alt: 'A star emoji.',
}

export const SvgTmdb: CustomImage = {
  src: tmdb_svg,
  alt: 'TMDb, The Movie Database'
}

// https://www.svgrepo.com/svg/490254/trash-can
// Author: IonutNeagu
// License: PD License
export const SvgTrashCan = ( { className }: { className?: string} ) => (
  <svg viewBox="-6.7 0 122.88 122.88" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"></path>
  </svg>
);

// https://www.svgrepo.com/svg/448592/search
// Author: HashiCorp
// License: MLP License
export const SvgSearch = ( { className }: { className?: string} ) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" d="M7.25 2a5.25 5.25 0 103.144 9.455l2.326 2.325a.75.75 0 101.06-1.06l-2.325-2.326A5.25 5.25 0 007.25 2zM3.5 7.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" clipRule="evenodd"></path>
  </svg>
);

// https://www.svgrepo.com/svg/448671/user-circle
// Author: HashiCorp
// License: MLP License
export const SvgUserCircle = ( { className }: { className?: string} ) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fillRule="evenodd" clipRule="evenodd">
      <path d="M8 3a3 3 0 100 6 3 3 0 000-6zM6.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
      <path d="M.25 8a7.75 7.75 0 1115.5 0A7.75 7.75 0 01.25 8zM8 1.75a6.25 6.25 0 00-5.274 9.604c.15-.194.325-.369.514-.533C3.855 10.286 4.67 10 5.5 10h5c.83 0 1.645.286 2.26.82.189.165.365.34.514.534A6.25 6.25 0 008 1.75zm0 12.5a6.228 6.228 0 01-4.238-1.656c.035-.196.153-.372.462-.641.323-.281.78-.453 1.276-.453h5c.495 0 .953.172 1.276.453.31.269.427.445.462.641A6.228 6.228 0 018 14.25z"></path>
    </g>
  </svg>
);

// https://www.svgrepo.com/svg/489030/loading-1
// Author: Gabriele Malaspina
// License: PD License
export const SvgLoading = ( { className }: { className?: string} ) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3V6M3 12H6M5.63607 5.63604L7.75739 7.75736M5.63604 18.3639L7.75736 16.2426M21 12.0005H18M18.364 5.63639L16.2427 7.75771M11.9998 21.0002V18.0002M18.3639 18.3642L16.2426 16.2429" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

// https://www.svgrepo.com/svg/488749/add-square
// Author: Gabriele Malaspina
// License: PD License
export const SvgAddSquare = ( { className }: { className?: string} ) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 8V16M16 12H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);