import axios from "axios"
import { useEffect } from "react"
import { set, useForm } from "react-hook-form"

const AggModal = ({ modalForm, setModalForm, setData, data, editData, setActionModalText, setEditData }) => {


    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(editData)
    }, [editData])




    const submit = (dataForm) => {



        if (!editData) {
            axios.post("https://jsonplaceholder.typicode.com/posts", dataForm)
                .then(res => {
                    console.log(res.data)
                    setData(data ? [...data, res.data] : res.data)
                    setActionModalText("Agregado")
                })
                .catch(err => {
                    console.log(err)
                })

            console.log("Entraste aqui")

        }
        else {
            console.log(editData.id)
            axios.put(`https://jsonplaceholder.typicode.com/posts/${editData.id}`, dataForm)
                .then(res => {
                    console.log(res.data)
                    setData(data.map(e => e.id === dataForm.id ? res.data : e))
                    setEditData(null)
                    setActionModalText("Editado")
                })
                .catch(err => {
                    console.log(err)
                })
        }

        setModalForm(false)

        reset({
            userId: "",
            title: "",
            body: ""
        })
    }









    const handleCloseModal = () => {
        setModalForm(false)
        setEditData(null)
        reset({
            userId: "",
            title: "",
            body: ""
        })
    }


    return (
        <div className={` ${!modalForm && 'hidden'} fixed top-0 left-0 w-full min-h-[100vh] bg-[#0003] backdrop-blur-[2px] flex justify-center items-center transition-transform`}>
            <form
                onSubmit={handleSubmit(submit)}
                className="  w-full max-w-[400px] bg-white p-6 rounded-xl flex flex-col gap-2 [&>label]:font-medium [&>label]:px-1 [&>label]:text-sm [&>input]:border [&>input]:border-gray-400 
        [&>input]:px-2 [&>input]:rounded-lg "
            >

                <div className=" text-white flex justify-end items-center">
                    <div onClick={handleCloseModal} className=" block bg-red-700 rounded-full px-1 cursor-pointer text-center">
                        <i className='bx bx-x font-semibold'></i>
                    </div>
                </div>

                <label htmlFor="">UserId</label>
                <input type="number"
                    {...register('userId'
                        , {
                            required: true,
                            minLength: 1,
                            maxLength: 2,
                            pattern: /^[0-9]+$/i,

                        }
                    )} />
                <label htmlFor="">Title</label>
                <input type="text"
                    {...register('title'
                        , {
                            required: true,
                            minLength: 3,
                        }
                    )}
                />
                <label htmlFor="">Body</label>
                <textarea className=" border border-solid  border-gray-400 rounded-md"
                    {...register('body'
                        , {
                            required: true,
                            minLength: 3
                        }
                    )}
                >

                </textarea>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {editData ? "Editar" : "Agregar"}
                </button>
            </form>
        </div>
    )
}

export default AggModal