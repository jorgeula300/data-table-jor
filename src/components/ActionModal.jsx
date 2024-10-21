
const ActionModal = ({ actionModalText }) => {
    return (
        <div>
            {
                actionModalText && (
                    <div className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                        <div className=" bg-white rounded-lg p-4 flex justify-center items-center gap-2">
                            <i className='bx bx-checkbox-checked text-green-600 text-3xl'></i>
                            <h2 className=" text-lg font-semibold">{actionModalText}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ActionModal