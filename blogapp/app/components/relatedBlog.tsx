import React from "react";
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
const RelatedBlog = ({ relatedBlogs }: { relatedBlogs: Blog[] }) => {
  return (
    <div className="flex gap-16 mx-16 justify-around py-5">
      {relatedBlogs &&
        relatedBlogs.map((blog, index) => (
          <div
            key={index}
            className="border border-solid rounded-md w-[377px] "
          >
            <img src={blog.image} alt="related blog" className="pb-4 "/>

            <p className="text-[20px] font-medium text-[#5E5873] pb-4 px-4">
              {blog.title}
            </p>
            <div className="flex gap-3 items-center pb-4 px-4">
              <img
                src={blog.author.image}
                alt="author"
                className="w-[30px] h -[30px] border border-solid rounded-full"
              />
              <p className="font-semibold text-[14px] font-montserrat text-[#6E6B7B]">
                by {blog.author.name}
              </p>
              <p className="font-normal text-[14px] font-montserrat text-[#B9B9C3]">
                |
              </p>
              <p className="font-normal text-[14px] font-montserrat text-[#B9B9C3]">
                {blog.createdAt}
              </p>
            </div>
            <div className="flex pb-4 px-4 justify-between">
              {blog.feature.map((item ,index) => (
                <div key={index} className="border rounded-[122px] w-[156px] h-[32px] bg-[#F5F5F5] flex flex-row justify-center items-center outline-none">
                  <p className="font-montserrat font-semibold text-[17px] text-[#8E8E8E]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-montserrat font-normal text-base text-[#6E6B7B] pb-4 px-4">
              {blog.description}
            </p>
            <hr className="pb-4 px-4"/>
            <div className="flex justify-between pb-4 px-4">
              <p className="text-[#5E5873] font-semibold text-base">
                2.3K Likes
              </p>
              <a
                href="/"
                className="font-montserrat font-semibold text-base text-[#7367F0]"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RelatedBlog;
