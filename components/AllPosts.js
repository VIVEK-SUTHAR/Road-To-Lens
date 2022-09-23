import { useQuery } from "@apollo/client";
import { AiOutlineComment } from "react-icons/ai";
import latestPosts from "../queries/latestPosts.js";
export default function Home() {
    // const { loading, error, data } = useQuery(recommendedProfilesQuery);
    const { loading, error, data } = useQuery(latestPosts);
    console.log(data);
    console.log(typeof data);
    if (loading) return 'Loading..';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="flex flex-col">
            <h2 className="text-4xl text-white text-center">Explore the Feed</h2>
            {
                data.explorePublications.items.map((post, index) => {
                    return <div key={index} className="bg-[#2a2a2a] text-white rounded-lg   w-3/4 my-2 mx-28 px-10 py-4">
                        <div className="bg-[#3a3a3a] p-2 flex flex-row w-80 rounded-xl text-2xl">{post.profile?.name}
                            <div className="mx-4 text-green-400 text-xl">{post.profile?.handle}</div>
                        </div>
                        <div>
                            <div className="text-xl font-light my-4">
                                {post.metadata?.content}
                            </div>
                            {post.metadata?.image ? (<img className="max-h-60 object-contain my-4 rounded-md" src={post.metadata?.image}></img>) : (null)}
                        </div>
                        <div className="flex flex-row">
                            <div className="flex justify-center items-center text-red-300">
                                <AiOutlineComment />
                                Comments {post.stats?.totalAmountOfComments}
                            </div>
                            <div className="flex justify-center items-center mx-4 text-red-300">
                                Upvote {post.stats?.totalUpvotes}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}