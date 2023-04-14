interface DropdownProps {
    title: string,
    items: string[],
    style: string
}

const Dropdown = ({ title, items, style }: DropdownProps) => {
    return (
        <span className={style}>
            <div className="dropdown">
                <label tabIndex={0} className="flex">
                    {title}
                    <img src="/arrow.svg" alt="" className="w-4 h-4 ml-2 my-0 mt-1" />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ">
                    {items.map((item: string, i: number) => <li key={item + i}><a>{item}</a></li>)}
                </ul>
            </div>
        </span>
    )
}
export default Dropdown