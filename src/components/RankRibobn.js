const RankRibbon = ({ rank }) => {
  return (
    <div
      className={`
        ${rank?`ribbon-${rank}`:``}
        flex flex-col items-center justify-center cursor-default pt-2 pb-1
      `}
    >
      <span className="text-white font-bold text-xl">{ rank }</span>
    </div>
  );
}
 
export default RankRibbon;