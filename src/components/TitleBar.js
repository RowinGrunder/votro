const TitleBar = ({ title, custom }) => {
  return (
    <div className="flex items-center">
      {/* left side */}
      <span className="font-bold text-3xl">{ title }</span>
      {/* right side */}
      <span className="ml-auto text-xl">{ custom }</span>
    </div>
  );
}
 
export default TitleBar;