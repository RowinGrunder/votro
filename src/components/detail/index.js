import ArtistLabel from "./ArtistLabel";
import BulletGap from "./BulletGap";
import LabelPair from "./LabelPair";
import { SongContext } from "../../contexts/SongContext";
import { useContext } from "react";

const MusicDetail = ({ item }) => {
  const { increaseVote } = useContext(SongContext);

  return (
    <div className="m-5 lowercase space-y-1 w-2/3">
      <div className="text-3xl text-black font-bold tracking-tighter truncate w-5/6">{ item.title }</div>
      <div className="flex flex-wrap items-center">
        <span className="text-black inline-block">{ item.album }</span>
        <BulletGap />
        { item.genres.map((genre, index) =>
          <div
            key={index}
            className="flex items-center"
          >
            <span className="text-gray-500">{ genre }</span>
            { (index !== item.genres.length-1) &&
              <BulletGap />
            }
          </div>
        )}
      </div>
      <ArtistLabel artist={item.artist} image={item.image} />
      <div className="flex-col space-y-1 pt-5">
        <LabelPair title="songwriter" value={item.writers} />
        <LabelPair title="released" value={item.released} />
      </div>
      <span className="text-black clamp-2 flex relative text-justify">
        { item.lyrics }
        <a href="/" className="absolute right-0 bottom-0 bg-white pl-3 underline text-blue-600">more</a>
      </span>
      <button
        onClick={() => increaseVote(item.id)}
        className="absolute right-3 top-2 h-20 border border-gray-200 flex flex-col items-center justify-center px-5 space-y-2 hover:bg-gray-50 bg-white"
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="black">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="text-black font-bold">{ item.votes }</span>
      </button>
    </div>
  );
}
 
export default MusicDetail;