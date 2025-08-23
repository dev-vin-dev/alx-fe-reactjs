import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000,              // data stays fresh for 5s
    cacheTime: 1000 * 60 * 5,     // cache persists 5 mins
    refetchOnWindowFocus: true,   // 🔹 explicitly refetch on window focus
    keepPreviousData: true,       // 🔹 keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Refresh Posts
        </button>
        {isFetching && <span className="text-gray-500">Updating...</span>}
      </div>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
