const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4 flex flex-col">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <button className="bg-white p-2 rounded-2xl mt-2 self-end w-fit">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
