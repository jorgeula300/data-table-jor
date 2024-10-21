import axios from "axios"
import { useEffect, useState } from "react"

import Header from "./components/Header"
import Table from "./components/Table"
import Pagination from "./components/Pagination"
import NumPosts from "./components/NumPosts"
import AggModal from "./components/AggModal"
import ActionModal from "./components/actionModal"



function App() {

  const [data, setData] = useState()
  const [editData, setEditData] = useState()
  const [dataQt, setDataQt] = useState(5)
  const [actionModalText, setActionModalText] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [modalForm, setModalForm] = useState(false)


  useEffect(() => {

    const url = `https://jsonplaceholder.typicode.com/posts`;
    axios.get(url).then(res => {
      setData(res.data);
    }).catch(err => console.log(err))

  }, [])

  useEffect(() => {

    setInterval(() => {
      setActionModalText()
    }, 5000)

  }, [actionModalText])







  const indexFin = currentPage * dataQt
  const indexIni = indexFin - dataQt
  const totalPages = Math.ceil(data?.length / dataQt)
  const nData = data?.slice(indexIni, indexFin)




  return (
    <>
      <Header setModalForm={setModalForm} />
      <div className=" w-full max-w-[900px] min-h-[90vh] mx-auto flex flex-col gap-2 justify-between ">
        <Table nData={nData} setEditData={setEditData} setModalForm={setModalForm} data={data} setData={setData} setActionModalText={setActionModalText} />

        <div className=" flex justify-between items-center border py-2 px-3">
          <p className=" font-semibold md:block hidden">{indexIni + 1} - {indexFin} of {data?.length} </p>
          <p className=" font-semibold block md:hidden">{indexIni + 1} - {indexFin} </p>
          <NumPosts setDataQt={setDataQt} data={data} />
          <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
        <AggModal modalForm={modalForm} setModalForm={setModalForm} setData={setData} data={data} editData={editData} setActionModalText={setActionModalText} setEditData={setEditData} />
        <ActionModal actionModalText={actionModalText} />
      </div>
    </>

  )
}

export default App
