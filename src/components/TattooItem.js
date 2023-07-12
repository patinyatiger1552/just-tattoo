import "../css/TattooItem.css";

function TattooItem(props) {
  const { tattoo } = props;
  return (
    <div className="tattoo-item">
      <img src={tattoo.thumbnailUrl} />
      <p>{tattoo.title}</p>
    </div>
  );
}

export default TattooItem;
