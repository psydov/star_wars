import React, { useContext } from "react";
import { AppContext } from "../../utils/context";
import { Link } from "react-router-dom";
import { Item } from "../../utils/types";

// interface NavItemProps {
//     changePage: Change,
//     title: string
// }

// interface NavItemProps extends IChange {
//     title: string;
// }

const NavItem: React.FC<{ item: Item }> = ({ item }) => {
    // требуется типизация события, если функция описана отдельно от
    // значения атрибута, связанного с обработкой события

    const { hero } = useContext(AppContext);

    // const func = (e) => changePage(title)
    return (
        <li>
            <Link
                className="nav-item btn btn-danger mx-1 border-warning border-3"
                to={`/${item.route}/${hero}`}
            >{item.title}</Link>
        </li>
    )
}

export default NavItem;