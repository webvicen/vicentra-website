import { Link } from "@inertiajs/react";

const SubSubMenu = ({ product, subMenu }) => {
    return (
        <ul className="space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-[9rem] top-[1rem] shadow-md z-50">
            {subMenu.subSubMenu.map((subSubMenu) => (
                <li
                    key={subSubMenu.id}
                    className="flex justify-start border-b border-gray-200 py-1"
                >
                    <Link
                        href={`/product/${product.slug}/${subMenu.slug}/${subSubMenu.slug}`}
                        className="text-sm text-gray-800"
                    >
                        {subSubMenu.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SubSubMenu;
