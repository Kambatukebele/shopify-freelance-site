import { useState, useEffect } from "react";
// import { fetchPosts } from "../../services/WordpressService";
// import mockPosts from "../../mockPosts.json";
// import Button from "../Button";
// import CardBlog from "./CardBlog";
import { Link } from "@inertiajs/react";
const DownBlog = () => {
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const getPosts = async () => {
    //         try {
    //             const data = await fetchPosts();
    //             setPosts(data.slice(0, 3)); // Display only the first 3 posts
    //         } catch (error) {
    //             console.error("Error fetching posts:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     getPosts();
    // }, []);
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    return (
        <>
            <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
                {/* {posts.map((post) => {
                    console.log(post);
                    return <CardBlog key={post.id} {...post} />;
                })} */}
            </div>
            <Link to="articles">
                <Button
                    buttonText="View More"
                    buttonExtraClass="bg-purple900 text-white"
                    buttonIconClass="bg-white text-purple900"
                />
            </Link>
        </>
    );
};
export default DownBlog;
