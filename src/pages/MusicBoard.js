import PageHeader from "../components/header";
import MusicCatalog from "../components/catalog";

const MusicBoard = ({ songs, setSongs }) => {
  return (
    <div>
      <PageHeader />
      <MusicCatalog
        songs={songs}
        setSongs={setSongs}
      />
    </div>
  );
}
 
export default MusicBoard;