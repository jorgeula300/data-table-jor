import axios from "axios"


const Table = ({ nData, setEditData, setModalForm, data, setData, setActionModalText }) => {

    const handleEdit = (item) => {
        setEditData(item)
        setModalForm(true)
        console.log(item)
    }

    const handleDelete = (item) => {
        console.log(item.id)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${item.id}`)
            .then(res => {
                console.log(res.data)
                setData(data.filter(e => e.id !== item.id))
                setActionModalText("Eliminado con exito")
            })
            .catch(err => console.log(err))
    }



    return (
        <div className=" px-3 text-sm overflow-x-auto">
            <table className="container w-full max-w-[900px] text-center mx-auto ">
                <thead className=" bg-[#FFC6FF]  ">
                    <tr className="[&>th]:border [&>th]:border-gray-400 rounded-xl fontq">
                        <th>ID</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>body</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {nData?.map((item, index) => (
                        <tr className="[&>td]:border [&>td]:border-gray-400 hover:bg-gray-500 hover:text-white" key={index}>
                            <td className=" font-semibold">{item.id}</td>
                            <td className=" font-semibold">{item.userId}</td>
                            <td className=" font-semibold">{item.title}</td>
                            <td className=" font-semibold">{item.body}</td>
                            <td className="">
                                <div className=" flex justify-center items-center gap-1 px-2">
                                    <button onClick={
                                        () => handleEdit(item)
                                    } className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2  rounded">
                                        <i className='bx bx-edit-alt'></i>
                                    </button>
                                    <button onClick={
                                        () => handleDelete(item)
                                    } className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
                                        <i className='bx bxs-trash'></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table