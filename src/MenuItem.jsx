export const MenuItem = ({menuItem}) => {
    const {name, price} = menuItem;
    return (
        <li className="list-group-item">
            {name} - {price} $
        </li>
    )
}
