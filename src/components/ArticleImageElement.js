const ArtileImageElement = ({ mediaImageLIst, title, uniqueId, isDetails }) => {
  console.log(mediaImageLIst[0]);
  if (isDetails) {
    let imageBig = mediaImageLIst[mediaImageLIst.length - 1];
    return <img src={imageBig.url} title={title} alt={title} key={uniqueId} />;
  }
  return (
    <img src={mediaImageLIst[0].url} title={title} alt={title} key={uniqueId} />
  );
};

export default ArtileImageElement;
