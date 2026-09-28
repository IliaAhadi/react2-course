import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Navbar() {
  const navs = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
    { name: "Create Blog", link: "/createBlog" },
    { name: "About", link: "/about" },
  ];

  return (
    <Container>
      <div className="h-30 flex justify-between">
        <ul className="flex items-center gap-20">
          {navs.map((nav) => (
            <li
              className="text-2xl font-medium text-emerald-800 cursor-pointer transition duration-200 hover:text-emerald-400"
              key={nav.link}
            >
              <Link to={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <img src="logo.png" alt="" />
      </div>
    </Container>
  );
}

export default Navbar;
