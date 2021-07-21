const RankRibbon = ({ rank }) => {
  return (
    <button
      className={`
        ${rank?`ribbon-${rank}`:``}
        flex flex-col items-center justify-center cursor-default pt-2 pb-1
      `}
    >
      <span className="text-white font-bold text-xl">{ rank }</span>
    </button>
  );
}
 
export default RankRibbon;