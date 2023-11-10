import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDescription = () => {
  // Get the 'id' parameter from the URL
  const blogs = [
    {
      id: 1,
      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

      Whenever one language arises, an alternative is always available. There is a famous typescript vs. javascript debate, and we are discussing TypeScript.
      
      Here’s an in-depth guide to everything you need to know about both languages and how to decide which one to choose for your new development project.`,
    },
    {
      id: 2,

      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

   to know about both languages and how to decide which one to choose for your new development project.`,
    },
    {
      id: 3,
      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

      Whenever one language arises, an alternative is always available. There is a famous typescript vs. javascript debate, and we are discussing TypeScript.
      
      Here’s an in-depth guide to everything you need to know about both languages and how to decide which one to choose for your new development project.`,
    },
    {
      id: 4,
      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

      Whenever one language arises, an alternative is always available. There is a famous typescript vs. javascript debate, and we are discussing TypeScript.
      
      Here’s an in-depth guide to everything you need to know about both languages and how to decide which one to choose for your new development project.`,
    },
  ];
  const { id } = useParams();

  const findBlogById = (blogs, id) => {
    return blogs.find(blog => blog.id === parseInt(id, 10));
  };
  
  const blog = findBlogById(blogs, id);
  return (
    <div>
      <h1>{blog.head}</h1>
      <p>{blog.desc}</p>
      {/* Render other blog details */}
    </div>
  );
}

export default BlogDescription;
