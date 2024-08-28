"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "@/app/components/navBar";
import Footer from "@/app/components/footer";
import Blogdes from "@/app/components/blogdes";
import RelatedBlog from "@/app/components/relatedBlog";
interface Author {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}
interface BlogDes {
  title: string;
  description: string;
  image: string;
  skills: string[];
  relatedBlogs: string[];
  author: Author;
  tags: string[];
}
interface Blog {
  image: string; // URL to the blog image
  title: string; // Title of the blog
  author: {
    image: string; // URL to the author's image
    name: string; // Name of the author
  };
  createdAt: string; // Date when the blog was created, formatted as "Apr 16, 2022"
  feature: string[]; // Array of features/tags associated with the blog
  description: string; // Short description of the blog
}
const relatedBlogs: Blog[] = [
  {
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kgjzu8o4592darvb.jpg", // URL to the blog image
    title: "Design Liberalized Exchange Rate Management", // Title of the blog
    author: {
      image: "/assets/profilepic.jpg", // URL to the author's image
      name: "Fred Boone", // Name of the author
    },
    createdAt: "Jan 10, 2020", // Date when the blog was created
    feature: ["UI/UX", "Development"], // Array of features/tags associated with the blog
    description:
      "A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.", // Short description of the blog
  },
  {
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kgjzu8o4592darvb.jpg", // URL to the blog image
    title: "Design Liberalized Exchange Rate Management", // Title of the blog
    author: {
      image: "/assets/profilepic.jpg", // URL to the author's image
      name: "Fred Boone", // Name of the author
    },
    createdAt: "Jan 10, 2020", // Date when the blog was created
    feature: ["UI/UX", "Development"], // Array of features/tags associated with the blog
    description:
      "A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.", // Short description of the blog
  },
  {
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kgjzu8o4592darvb.jpg", // URL to the blog image
    title: "Design Liberalized Exchange Rate Management", // Title of the blog
    author: {
      image: "/assets/profilepic.jpg", // URL to the author's image
      name: "Fred Boone", // Name of the author
    },
    createdAt: "Jan 10, 2020", // Date when the blog was created
    feature: ["UI/UX", "Development"], // Array of features/tags associated with the blog
    description:
      "A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.", // Short description of the blog
  },
];
const Page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<BlogDes>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://a2sv-backend.onrender.com/api/blogs/${params.id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
        console.log(response.data, "data");
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);
  console.log(params.id, "id");
  return (
    <div>
      <NavBar />
      {data && (
        <Blogdes
          author={data.author ? data.author.name : "John Doe"}
          personImage={
            data.author ? data.author.image : "/assets/profilepic.jpg"
          }
          title={data.title}
          description={data.description}
          image={data.image}
          skills={data.skills}
          relatedBlogs={data.relatedBlogs}
          tags={data.tags}
        />
      )}
      <p className="font-semibold text-[28px] font-montserrat ml-24 my-20">Related Blogs</p>
      {data && <RelatedBlog relatedBlogs={relatedBlogs} />}
      <Footer />
    </div>
  );
};

export default Page;
