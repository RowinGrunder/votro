const ArtistLabel = ({ artist, image }) => {
  return (
    <div className="flex items-center gap-2">
      {/* caption */}
      <div className="rounded-full h-6 w-6">
        <img
          src={require(`../../assets/artists/${image}`).default}
          alt={artist}
          className="object-cover h-full w-full rounded-full"
        />
      </div>
      {/* value */}
      <span className="text-black font-bold">{ artist }</span>
    </div>
  );
}
 
export default ArtistLabel;