import { v4 as uuidv4 } from "uuid";
import ArtileImageElement from "./ArticleImageElement";

const ArticleImage = ({ mediaList, isDetails }) => {
  return (
    <div className="">
      {mediaList.map((mediaItem, mediaIndex) => {
        let mediaImageLIst = mediaItem["media-metadata"];
        const uniqueId = uuidv4();
        return (
          <ArtileImageElement
            mediaImageLIst={mediaImageLIst}
            title={mediaItem.caption}
            uniqueId={uniqueId}
            isDetails={isDetails}
          />
        );
      })}
    </div>
  );
};
export default ArticleImage;
