import SubMenu from "./SubMenu";
import { FaCaretDown } from "react-icons/fa";

const MainMenu = ({
    subMenuProducts,
    toggleSubMenuProduct,
    toogleSubSubMenuCategory,
}) => {
    return (
        <nav>
            <ul className="flex items-start gap-[1.875rem]">
                {subMenuProducts.map((product) => (
                    <li
                        key={product.id}
                        className="main_category text-base text-gray-800 capitalize flex items-center gap-1 hover:cursor-pointer relative"
                        onClick={(e) => toggleSubMenuProduct(e, product.name)}
                    >
                        {product.name}
                        <FaCaretDown className="text-vicentra-yellow text-xl" />
                        {product.isOpen && (
                            <SubMenu
                                product={product}
                                toogleSubSubMenuCategory={
                                    toogleSubSubMenuCategory
                                }
                            />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainMenu;
