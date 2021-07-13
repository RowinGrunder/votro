const LabelPair = ({ title, value }) => {
  const parsedValue = (value && value.constructor === Array) ? value.join(', ') : value;

  return (
    <p className="clamp-1">
      <span className="text-gray-500 mr-1">{ title }:</span>
      <span className="text-black">{ parsedValue }</span>
    </p>
  );
}
 
export default LabelPair;