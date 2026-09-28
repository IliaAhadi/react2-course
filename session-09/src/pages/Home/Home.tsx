import CardPopular from "../../components/CardPopular/CardPopular";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Container>
        <div>
          <div>
            <p className="text-gray-700 font-medium">Where to go</p>
            <h1 className="text-5xl font-bold">Popular destination</h1>
          </div>

          <div className="mt-16">
            <CardPopular />
          </div>

          <div className="flex justify-between gap-52 mb-32">
            {/* Card #1 */}
            <div>
              <h1 className="flex items-center text-2xl font-bold gap-7">
                <span>
                  <img src="/map.svg" alt="" />
                </span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                dolor sunt quas ab a est maiores amet commodi adipisci
                aspernatur non esse voluptate ipsum! Deserunt saepe aspernatur
                rerum possimus rem!
              </p>
            </div>

            {/* Card #2 */}
            <div>
              <h1 className="flex items-center text-2xl font-bold gap-5">
                <span>
                  <img src="/luggage.svg" alt="" />
                </span>

                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                veniam, debitis perferendis repellendus vitae, nam laborum ullam
                vero blanditiis totam exercitationem ipsum earum illo nemo non
                ab. Omnis, error dolorem?
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Session-9 */}
      <div className="bg-[url(/background.jpg)] bg-cover bg-center bg-transparent w-full min-h-[40rem] mb-30 flex justify-between items-center px-50 gap-10">
        {/* Div #1 */}
        <div>
          <div>
            <h1 className="text-5xl font-bold mb-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vitae
              sint recusandae natus incidunt! Quibusdam impedit saepe fuga.
              Nisi, perspiciatis!
            </p>
            <p className="my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              dolore minima excepturi distinctio, ullam ut quisquam laborum
              quidem eaque non!
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <img
                className="rounded-full w-18 h-18"
                src="/profile.png"
                alt=""
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold">Amelia Simpsons</h3>
              <p>Blogger / Nomad Traveler / Florida</p>
            </div>
          </div>
        </div>

        {/* Div #2 */}
        <div className="relative">
          <img
            className="rounded-3xl w-[70rem] h-[25rem]"
            src="/vid.webp"
            alt=""
          />

          <img
            className="absolute top-1/2 left-1/2 -translate-1/2"
            src="play.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-15 mx-50 mb-30">
        <div className="grid grid-cols-2 gap-7 w-1/2 ">
          <img src="vac1.jpg" alt="" />
          <img src="vac2.jpg" alt="" />
          <img src="vac3.jpg" alt="" />
          <img src="vac4.jpg" alt="" />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>

          <p className="py-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            ratione similique distinctio?
          </p>

          <p className="pb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            quibusdam maiores quaerat amet accusamus laboriosam officia. Optio
            molestiae cumque ratione.
          </p>
          <button className="border-2 border-gray-400 px-10 py-4 font-medium transition duration-300 hover:bg-gray-400 hover:text-white cursor-pointer ">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
