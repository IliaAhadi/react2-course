export default function CardPopular() {
  const cards = [
    { url: "111.jpg", title: "title1", location: "Italy" },
    { url: "222.jpg", title: "title2", location: "America" },
    { url: "333.jpg", title: "title3", location: "Indonesia" },
    { url: "444.jpg", title: "title4", location: "Island" },
  ];

  return (
    <div className="flex justify-between items-center gap-7">
      {cards.map((card) => (
        <div
          className="bg-cover bg-center shadow-md shadow-cyan-600 w-75 h-[27rem] mb-25 rounded-lg transition duration-300 hover:scale-95"
          key={card.title}
          style={{ backgroundImage: `url(/${card.url})` }}
        >
          <div className="pt-[20rem] text-white cursor-pointer">
            <h2 className="text-center text-2xl font-bold">{card.title}</h2>
            <p className="flex justify-center items-center pt-5">
              <span>
                <img src="/location.svg" alt="" />
              </span>
              <span className="ml-2 text-lg font-medium">{card.location}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
