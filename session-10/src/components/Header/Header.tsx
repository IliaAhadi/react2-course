import Container from "../Container/Container";

export default function Header() {
  return (
    <div className="bg-[url('/header.avif')] bg-cover bg-center w-full min-h-[57rem] mb-30">
      <Container>
        <h1 className="text-white text-8xl font-bold flex flex-col pt-50">
          <span>Explore the world</span>
          <span>With exciting people</span>
        </h1>
        <p className="flex flex-col text-white my-10">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            possimus tempore corrupti
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            possimus tempore corrupti
          </span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </p>
        <button className="bg-black text-white text-lg px-10 py-4 rounded cursor-pointer transition duration-300 hover:bg-white hover:text-black">
          Start Now
        </button>

        <div className="grid grid-cols-3 text-white gap-10 pt-30">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <h1 className="text-4xl font-bold">0{i}</h1>
              <h3 className="text-xl font-bold py-3">
                Choose the place and time
              </h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
