import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import About from "./pages/About/About";
import BlogPage from "./components/BlogPage/BlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      <Route path="/about" element={<About />} />

      <Route path="/blogs/:id" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
