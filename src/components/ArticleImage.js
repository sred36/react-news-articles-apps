import { v4 as uuidv4 } from "uuid";
import ArtileImageElement from "./ArticleImageElement";

const ArticleImage = ({ title, mediaList, isDetails }) => {
  return (
    <div className="">
      {mediaList.map((mediaItem, mediaIndex) => {
        let mediaImageLIst = mediaItem["media-metadata"];
        console.log("mediaImageLIst", mediaImageLIst);
        const uniqueId = uuidv4();
        return (
          <ArtileImageElement
            mediaImageLIst={mediaImageLIst}
            title={title}
            uniqueId={uniqueId}
            isDetails={isDetails}
          />
        );
      })}
    </div>
  );
};
export default ArticleImage;
