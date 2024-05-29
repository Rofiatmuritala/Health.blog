import Image from "next/image";

async function FetchData(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PostDetails({ params }) {
  const { postId } = params;
  const data = await FetchData(postId);
  console.log(data);
  return (
    <>
      {/* <h1>post details: {params.postId}</h1> */}
      <h1 className="text-center text-4xl pt-8 capitalize font-bold">post</h1>
      <div className="items-center justify-center flex flex-col p-5 lg:px-48">
        <div className=" border-1 md:rounded-lg p-8 bg-gray-100">
          <h1 className="font-bold mb-8 md:text-2xl capitalize">
            Title:
            {data.title}
          </h1>
          <Image
            src="/iron.jpg"
            alt="image"
            width={900}
            height={600}
            className="mb-8"
          />

          <p className="capitalize">{data.body}</p>
        </div>
      </div>
    </>
  );
}
