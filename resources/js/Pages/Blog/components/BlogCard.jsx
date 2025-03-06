import { Link } from "@inertiajs/react";

export default function BlogCard({ post }) {
    return (
        <Link
            href={`/blog/${post.category.slug}/${post.slug}`}
            className="rounded-md overflow-hidden shadow-md"
        >
            <div className="bg-gray-300 h-[10rem] relative">
                <div className="bg-vicentra-black text-white px-4 py-1 absolute top-4 right-4 rounded-full z-50">
                    {post.category.name}
                </div>
                <div className="bg-white/25 w-full h-full absolute"></div>
                <img
                    src={`/storage/${post.image}`}
                    alt={post.slug}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-base font-semibold text-gray-800">
                    {post.title}
                </h2>
                <p className="text-sm text-justify font-normal text-gray-500 mt-[0.5rem]">
                    {post.short_description}
                </p>
            </div>
        </Link>
    );
}
