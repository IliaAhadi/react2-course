import Container from "../Container/Container";

// Session-10
export default function Footer() {
  return (
    <div className="bg-[url(5555555555.jpg)] bg-cover w-full h-[25rem] relative">
      <Container>
        <div className="flex text-white items-center justify-between gap-2 py-15">
          <div>
            <h3 className="text-xl font-bold mb-4">About us</h3>
            <p>
              About Organization <br />
              Our Journey <br />
              Our Partners
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <p>
              Introduction <br />
              Organization Team <br />
              Press Enquiries
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <p>
              Privacy Policy <br />
              Cookies Policy <br />
              Term & Conditions
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span>
                <img src="/location.svg" alt="" />
              </span>

              <h3 className="flex flex-col">
                <span className="text-lg font-medium">Address:</span>
                <span>Street Name, NY 38954</span>
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span>
                <img src="/phone.svg" alt="" />
              </span>

              <h3 className="flex flex-col">
                <span className="text-lg font-medium">Phone:</span>
                <span>578-393-4937</span>
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span>
                <img src="/mobile.svg" alt="" />
              </span>

              <h3 className="flex flex-col">
                <span className="text-lg font-medium">Mobile:</span>
                <span>578-393-4937</span>
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
