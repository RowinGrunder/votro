const TitleBar = ({ title, custom }) => {
  return (
    <div className="flex items-center">
      <span className="font-bold text-3xl">{ title }</span>
      <span className="ml-auto text-xl">{ custom }</span>
    </div>
  );
}
 
export default TitleBar;