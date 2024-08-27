import React from 'react'
interface props {
    title : string
    description : string
    image:string
    personImage:string
    author:string
    relatedBlogs:string[]
    skills:string[]
    tags:string[]
}
const Blogdes = ({title , description , image , relatedBlogs , skills , personImage , author , tags} : props) => {
return (
    <div className='flex flex-col items-center justify-center gap-7 mx-14 mt-28' >
        <p className='font-normal text-[48px] text-black'>{title}</p>
        <div className='flex'>
            {tags.map((tag, index) => (
                <span key={index} className='font-montserrat font-light text-base text-black'>
                    {tag}
                    {index !== tags.length - 1 && ", "}
                </span>
            ))}
            <span className='font-montserrat font-light text-base text-black'> | 6 min read</span>
        </div>
        <img src={image} className='object-contain ' alt="an image" />
        <img src={personImage} alt ="profile Picture" className='w-[80px] h -[80px] border border-solid rounded-full'/>
        <p className='font-montserrat font-normal text-base text-black' >{author} | Software Engineer</p>
        <p dangerouslySetInnerHTML={{ __html: description }} className='font-normal text-[40px] text-black px-24'></p>
    </div>
)
}

export default Blogdes
