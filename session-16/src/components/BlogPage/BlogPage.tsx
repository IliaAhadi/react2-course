import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import type { IBlog } from "../../pages/Blogs/Blogs";

// session 14
export default function BlogPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<IBlog | null>(null);

  useEffect(() => {
    function getBlog() {
      setLoading(true);
      axios
        .get(`http://localhost:8000/blogs/${id}`)
        .then((res) => setBlog(res.data))
        .finally(() => setLoading(false));
    }
    getBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div>
        <div
          className="bg-cover bg-center  h-[60vh] mb-30 flex justify-center items-center relative"
          style={{
            backgroundImage: `url(${blog?.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <h1 className="text-5xl font-bold text-white flex justify-center items-center text-center leading-2 w-[50rem] relative">
            {blog?.title}
          </h1>
        </div>

        <Container>
          <div className="mb-30 leading-10">
            <p>{blog?.description}</p>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
