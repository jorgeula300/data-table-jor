

const NumPosts = ({ setDataQt, data }) => {
    const change = (e) => {
        setDataQt(e.target.value)
    }

    return (
        <div className=" flex justify-center items-center gap-2">
            <h2 className=" font-semibold hidden md:block">rows per page</h2>
            <h2 className=" font-semibold md:hidden">rows</h2>
            <select onChange={(e) => change(e)} className="border rounded-xl shadow-lg px-1">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value={data?.length}>{data?.length}</option>
            </select>
        </div>
    )
}

export default NumPosts