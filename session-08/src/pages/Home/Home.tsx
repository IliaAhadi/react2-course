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
    </div>
  );
}
