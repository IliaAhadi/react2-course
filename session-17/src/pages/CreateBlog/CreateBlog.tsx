import { useState } from "react";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

// session 16 -> updated on session 17
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function handleCreateBlog() {
    try {
      if (!title || !description || !image) return;

      const res = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          title,
          description,
          image,
        }),
      });

      if (res.ok) {
        toast.success("Blog Created Successfully");
        setTitle("");
        setDescription("");
        setImage("");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error on Creating Blog");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[url(/header4.jpg)] bg-cover bg-center w-full h-[60vh] mb-30 flex justify-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="flex flex-col justify-center items-center z-10">
          <h1 className="text-7xl font-bold text-white text-center">
            Create Blog
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
        <div className="flex flex-col items-center gap-10 mb-30">
          <input
            className="bg-cyan-100 w-full h-15 rounded text-xl p-4 outline-none focus:bg-orange-100"
            type="text"
            placeholder="Enter Blog Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <input
            className="bg-cyan-100 w-full h-15 rounded text-xl p-4 outline-none focus:bg-orange-100"
            type="text"
            placeholder="Enter Image Link"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />

          <textarea
            className="bg-cyan-100 w-full h-[15rem] rounded text-xl p-4 outline-none focus:bg-orange-100"
            placeholder="Enter Blog Content"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <button
            className="bg-cyan-700  text-cyan-100 w-full font-medium py-5 px-10 rounded text-2xl cursor-pointer hover:bg-cyan-100 hover:text-cyan-700 transition duration-300"
            onClick={() => handleCreateBlog()}
            type="button"
          >
            Create Blog
          </button>
        </div>
      </Container>

      <Toaster position="top-right" reverseOrder={false} />

      <Footer />
    </div>
  );
}
