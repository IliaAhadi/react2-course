import type { IBlogs } from "../../pages/Blogs/Blogs";

export default function BlogItem({ title, description, image }: IBlogs) {
  return (
    <div className="shadow-md shadow-amber-800 h-[30rem] rounded transition duration-300 hover:brightness-50">
      <img className="rounded-t h-70 w-full " src={image} alt="" />
      <h3 className="text-xl font-bold my-5 px-5">{title}</h3>
      <p className="pb-5 px-5 text-gray-500">{description}</p>
    </div>
  );
}
