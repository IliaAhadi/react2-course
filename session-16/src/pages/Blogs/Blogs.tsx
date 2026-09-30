import { useEffect, useState } from "react";
import BlogItem from "../../components/BlogItem/BlogItem";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

// session 13
export interface IBlogs {
  id: number | string;
  title: string;
  description: string;
  image: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<IBlogs[]>([]);

  useEffect(() => {
    async function getBlogs() {
      // await new Promise((res) => setTimeout(res, 3000));

      axios
        .get("http://localhost:8000/blogs")
        .then((res) => setBlogs(res.data));
    }
    getBlogs();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="bg-[url(/header3.jpg)] bg-cover bg-center w-full h-[60vh] mb-30 flex justify-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="flex flex-col justify-center items-center z-10">
          <h1 className="text-7xl font-bold text-white text-center">Blogs</h1>
          <p className="text-white text-center pt-10 font-medium text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
            nesciunt?
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-2 justify-between gap-10 mt-20 mb-30">
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <BlogItem {...blog} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
