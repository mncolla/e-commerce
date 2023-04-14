import Dropdown from "./Dropdown"

const Filters = () => {
    return (
        <div className="flex justify-between w-8/12 mx-auto mt-5">
            <div className="">
                <Dropdown title={"Headphone type"} items={["Item 1", "Item 2"]} style={"bg-gray-300 mr-2 rounded-3xl px-4 py-2"} />
                <Dropdown title={"Price"} items={["Item 1", "Item 2"]} style={"bg-gray-300 mr-2 rounded-3xl px-4 py-2"} />
                <Dropdown title={"Color"} items={["Item 1", "Item 2"]} style={"bg-gray-300 mr-2 rounded-3xl px-4 py-2"} />
                <Dropdown title={"Material"} items={["Item 1", "Item 2"]} style={"bg-gray-300 mr-2 rounded-3xl px-4 py-2"} />

            </div>

            <div className="">
                <Dropdown title={"Sort by"} items={["Item 1", "Item 2"]} style={"border-solid border-2 border-slate-400  mr-2 rounded-3xl px-4 py-1"} />
            </div>

        </div>
    )
}
export default Filters