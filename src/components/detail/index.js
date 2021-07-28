import ArtistLabel from "./ArtistLabel";
import BulletGap from "./BulletGap";
import LabelPair from "./LabelPair";
import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

// music content for preview and music info
const MusicDetail = ({ item, preview=true }) => {
  const { increaseVote } = useContext(AppContext);

  return (
    <div className={`${ preview ? 'm-5' : 'ml-5 lg:w-11/12' } lowercase space-y-1`}>
      {/* title */}
      <div className={`${ preview ? 'truncate' : '' } text-3xl text-black font-bold tracking-tighter w-5/6`}>{ item.title }</div>
      {/* album and genre */}
      <div className="flex flex-wrap items-center">
        <span className="text-black inline-block">{ item.album }</span>
        <BulletGap />
        { item.genres && item.genres.map((genre, index) =>
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
      {/* artist */}
      {item.artist && <ArtistLabel artist={item.artist} image={item.image} />}
      <div className="flex-col space-y-1 pt-5">
        {/* writers */}
        <LabelPair title="songwriter" value={item.writers} preview={preview} />
        {/* release date */}
        <LabelPair title="released" value={moment(item.released).format('LL')} />
      </div>
      {/* lyrics */}
      {/* hidden on music info page */}
      {preview &&
        <span className="text-black clamp-2 flex relative text-justify">
          { item.lyrics }
          <Link
            to={`/song/${item.id}`}
            className="absolute right-0 bottom-0 bg-white pl-3 underline text-blue-500 outline-none"
          >
            more
          </Link>
        </span>
      }
      {/* increase vote button */}
      <button
        onClick={() => increaseVote(item.id)}
        className={`${ preview ? 'right-3 top-2' : 'right-5 top-2' } absolute  h-20 border border-gray-200 flex flex-col items-center justify-center px-5 space-y-2 hover:bg-gray-50 bg-white`}
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