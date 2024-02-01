const Card = ({ name, breed, image, owner }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={`Image of ${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Breed: {breed}</p>
        {owner && (
          <div className="pt-4">
            <img
              className="w-full"
              src={owner.image}
              alt={`Image of ${owner.name}`}
            />
            <div className="font-bold">Owner: {owner.name}</div>
            <div className="text-sm text-gray-600">Email: {owner.email}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
