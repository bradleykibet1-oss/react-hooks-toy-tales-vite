import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onDeleteToy={onDeleteToy}
      onLikeToy={onLikeToy}
    />
  ));

  return <div className="toy-container">{toyCards}</div>;
}

export default ToyContainer;