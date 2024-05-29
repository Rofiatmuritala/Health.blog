import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Posts() {
  const data = await getData();
  //   console.log(data);
  return (
    <>
      <h1 className="text-center text-4xl capitalize font-bold mt-2">posts</h1>
      {data.map((post) => {
        return (
          <div
            key={post.id}
            className="grid lg:grid-cols-2 gap-4 items-center justify-center"
          >
            <div className=" flex flex-col border-1 rounded-lg p-2 m-4 justify-center items-center md:m-12 bg-gray-100">
              {/* when we have a child that is not an anchor tag we need to pass passHref*/}
              <Link href={`posts/${post.id}`} passHref>
                <h1 className="mb-4 font-bold text-sky-500">
                  <span className="font-bold">Title:</span> {post.title}
                </h1>
                <p>{post.body}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
