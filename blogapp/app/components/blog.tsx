import React from "react";
import Link from "next/link";
interface props {
    id:string
  icon: string;
  name: string;
  date: string;
  title: string;
  content: string;
  feature: string[];
  job: string;
  image: string;
}

const blog = ({
    id,
  icon,
  name,
  date,
  title,
  content,
  feature,
  job,
  image,
}: props) => {
return (
    <div className="flex flex-col">
        <hr className="border-[#D7D7D7] border-[1.13px] mb-3"></hr>

        <div className="flex justify-between w-full">
            <div>
                <div className="flex gap-3 items-center ">
                    <img
                        src={icon}
                        alt="icon"
                        className="border border-solid rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-[25px] text-[#000000] font-montserrat">
                            {name}
                        </p>
                        <p className="font-semibold text-[17px] text-[#9C9C9C] font-montserrat">
                            {job}
                        </p>
                    </div>
                    <p className="font-montserrat font-medium text-[17px] text-[#868686]">
                        {date}
                    </p>
                </div>
                <div className="flex gap-4">
                <div>
                    <Link href={`../blog/${id}`} className="font-bold text-[34px] font-montserrat text-black">
                        {title}
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: content }} className="font-montserrat font-normal text-[24px] text-[#737373]">
                        
                    </p>
                </div>
                
                <img
                src={image}
                alt="image"
                className="max-w-[450px] max-h-[400px] object-contain border border-solid rounded-[12px]"
            />
                
                </div>
                <div className="flex gap-3">
            {feature.map((item , index) => ( 
                <div key={index} className="border rounded-[122px] w-[167px] h-[58px] bg-[#F5F5F5] flex flex-row justify-center items-center outline-none">
                    <p className="font-montserrat font-semibold text-[17px] text-[#8E8E8E]">
                        {item}
                    </p>
                </div>))
           
            }
            </div>
             </div>
        </div>
    </div>
);
};

export default blog;
