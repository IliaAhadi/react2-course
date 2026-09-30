import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// Session 11
export default function About() {
  const abouts = [
    {
      icon: "/map-location.svg",
      title: "Non provident beatae",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,nesciunt?",
    },
    {
      icon: "/prize.svg",
      title: "Non provident beatae",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,nesciunt?",
    },
    {
      icon: "/sitemap.svg",
      title: "Non provident beatae",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,nesciunt?",
    },
    {
      icon: "/trophy.svg",
      title: "Non provident beatae",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,nesciunt?",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-[url(/header2.jpg)] bg-cover bg-center w-full h-[60vh] mb-30 flex justify-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="flex flex-col justify-center items-center z-10">
          <h1 className="text-7xl font-bold text-white text-center">
            About Us
          </h1>
          <p className="text-white text-center pt-10 font-medium text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
            nesciunt?
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <Container>
        <div className="flex justify-between items-center gap-10 mb-30">
          {abouts.map((item) => (
            <div className="flex flex-col justify-center items-center text-center">
              <span>
                <img src={item.icon} alt="" />
              </span>
              <h3 className="text-xl font-bold my-3">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[url(/background.jpg)] bg-cover bg-center w-full h-[25rem] mb-30 flex justify-between ">
          <div className="flex flex-col items-start justify-center px-20">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor</h1>
            <p className="my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              mollitia et esse dolorem, sed maiores adipisci corrupti?
              Obcaecati, praesentium repellat!
            </p>
            <button className="bg-black text-white font-medium px-10 py-5 rounded cursor-pointer transition duration-300 hover:bg-white hover:text-black">
              Apply Now
            </button>
          </div>

          <img className="h-[25rem] w-full" src="/beach.jpg" alt="" />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
