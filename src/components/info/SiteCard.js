const SiteCard = ({ name, text, site, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="flex bg-white text-black align-center p-5 hover:bg-opacity-90 cursor-pointer">
        <img src={require(`../../assets/sites/${name}.png`).default} alt="" className="h-12 w-12" />
        <div className="m-auto ml-5">
            <p className="text-black font-bold">{ text } </p>
            <p className="text-black">{ site }</p>
        </div>
      </div>
    </a>
  );
}
 
export default SiteCard;