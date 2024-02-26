const DogCard = ({ name, breed, picture, owner }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <h1>Users Dog</h1>
      <img className="w-full" src={picture} alt={`Image of ${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Breed: {breed}</p>
        {owner && (
          <div className="pt-4">
            <div className="text-sm text-gray-600">Email: {owner.email}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DogCard;
