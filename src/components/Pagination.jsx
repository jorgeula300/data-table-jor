import React from 'react'

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div className=' flex justify-between items-center px-4'>
            <div className=' flex justify-center gap-3'>
                <div className='cursor-pointer border rounded-xl shadow-lg text-center  '>
                    <i className='bx bx-chevron-left ' onClick={prevPage} ></i>

                </div>

                <h3 className=' font-semibold'>{currentPage} / {totalPages}</h3>
                <div onClick={nextPage} className='cursor-pointer border rounded-xl text-center shadow-lg'>
                    <i className='bx bx-chevron-right ' ></i>
                </div>
            </div>
        </div>
    )
}

export default Pagination