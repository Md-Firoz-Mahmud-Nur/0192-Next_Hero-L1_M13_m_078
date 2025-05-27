import React from "react";

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);
  console.log(params.id);
  return (
    <div className="container mx-auto">
      Post Details {params.id}
      <h2> title: {title}</h2>
      <p>Body: {body}</p>
    </div>
  );
};

export default PostDetailsPage;
