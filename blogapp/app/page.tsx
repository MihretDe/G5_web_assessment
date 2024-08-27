"use client";
import Image from "next/image";
import Blog from "./components/blog";
import NavBar from "./components/navBar";
import { useState , useEffect} from "react";
import axios from "axios";
import Footer from "./components/footer";
interface Blog {
  _id : string
  image: string;
  title:string
  description: string
  author: {
    name: string;
  };
  isPending: boolean
  tags: string[]
  likes: number
  relatedBlogs: string[]
  skills: string[]
  createdAt: string
  updatedAt: string
  __v: number


}
const formatDate = (dateString : string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export default function Home() {
  const [data, setData] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://a2sv-backend.onrender.com/api/blogs", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        setData(response.data)
        // console.log(response.data, "data");
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []); 

  return (
  <div>
      <NavBar />
      <div className="flex gap-14 w-[60%] justify-between ml-24 my-9">
        <p className="font-Montserrat font-semibold text-[32px] text-[#000000]">
          Blogs
        </p>
        <div className="flex gap-7  ">
          <input
            type="text"
            placeholder="Search..."
            className=" border-solid rounded-[100px] border-[#CFCFCF] pl-4 w-[380px] h-[66px] border-2"
          />
          <div className="border border-solid rounded-[100px] bg-[#264FAD] w-[193px] h-[66px] flex items-center justify-center">
            <p className="text-white font-semibold text-[20px] font-Montserrat ">+ New Blog </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 mx-44">
        {data.slice(4, 9).map((blog) => (
          
          <Blog
            id = {blog._id}
            icon="/assets/icon.svg"
            name={blog.author.name || "John"}
            date={formatDate(blog.createdAt)}
            title={blog.title}
            content={blog.description}
            feature={blog.tags}
            job="software engineer"
            image={blog.image}
          />
        ))}
    </div>
    <Footer/>
    </div>
    
  );
}
