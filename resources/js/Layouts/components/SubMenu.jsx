import SubSubMenu from "./SubSubMenu";
import { Link } from "@inertiajs/react";
import { FaCaretDown } from "react-icons/fa";

const SubMenu = ({ product, toogleSubSubMenuCategory }) => {
    return (
        <ul className="space-y-2 bg-white min-w-[12rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md z-50">
            {product.subMenu.map((subMenu) => (
                <li key={subMenu.id}>
                    {subMenu.subSubMenu.length > 0 ? (
                        <div
                            className="sub_category w-full flex justify-between text-sm text-gray-800 capitalize gap-1 hover:cursor-pointer relative"
                            onClick={(e) =>
                                toogleSubSubMenuCategory(
                                    e,
                                    product.name,
                                    subMenu.name
                                )
                            }
                        >
                            {subMenu.name}
                            <FaCaretDown className="text-vicentra-yellow text-xl" />
                            {subMenu.isSubSubMenuOpen && (
                                <SubSubMenu
                                    product={product}
                                    subMenu={subMenu}
                                />
                            )}
                        </div>
                    ) : (
                        <Link
                            href={`/product/${product.slug}/${subMenu.slug}`}
                            className="text-sm text-gray-800 capitalize flex justify-start"
                        >
                            {subMenu.name}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default SubMenu;
