

const Header = ({ setModalForm }) => {
    const handleClick = () => {
        setModalForm(true)
    }
    return (
        <header className=" w-full h-[8vh] border mb-3 md:px-4 px-2 shadow-lg rounded-br-lg rounded-bl-lg flex justify-between items-center ">
            <div className=" flex justify-center items-center gap-2">
                <i className='bx bxs-book text-4xl text-[#D46C9E]'></i>
                <h2 className=" font-bold text-xl">Data Table</h2>
            </div>
            <button onClick={handleClick} className="bg-[#D46C9E] hover:bg-[#d68fb1] text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2">
                <span>Agregar</span>
                <i className='bx bx-add-to-queue'></i>
            </button>
        </header>
    )
}

export default Header