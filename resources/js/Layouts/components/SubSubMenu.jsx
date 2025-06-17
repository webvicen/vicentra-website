import { Link } from "@inertiajs/react";

const SubSubMenu = ({ product, subMenu }) => {
    return (
        <ul className="space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-[9rem] top-[1rem] shadow-md z-50">
            {subMenu.subSubMenu.map((subSubMenu) => (
                <li key={subSubMenu.id}>
                    <Link
                        href={`/product/${product.slug}/${subMenu.slug}/${subSubMenu.slug}`}
                        className="block w-full px-2 py-1 text-sm text-gray-800 hover:bg-gray-100 rounded transition duration-150"
                    >
                        {subSubMenu.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SubSubMenu;
