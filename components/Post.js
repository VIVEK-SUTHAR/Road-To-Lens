// components/Post.js
export default function Post(props) {
    const post = props.post;

    return (
        <div className="p-8 w-3/4 ]">
            <div className="max-w-md mx-auto bg-[#2a2a2a]  text-yellow-50   rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8">
                        <p className="mt-2 text-xs text-white whitespace-pre-line">
                            {post.metadata.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}