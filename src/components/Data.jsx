import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { datacontext } from "./datacontext";

const Data = ({ item }) => {
  const { data , setData , setFormData , postData } = useContext(datacontext)
  const editData = async ()=>{
    setFormData({
      urllink: item.urllink,
      username: item.username,
      password: item.password
    })
    deleteData()
  }
  const deleteData = async ()=>{
    let a = await fetch(`http://localhost:3000/delete/${item.urllink}`)
    let response = await a.text()
    console.log(response)
    let arr = [...data]
    let newArr = arr.filter((e)=>e.urllink!==item.urllink)
    setData(newArr)
  }
  return (
    <div id={item.urllink} className="bg-green-300 grid grid-flow-col grid-cols-[2fr_3fr] pl-2 pr-2">
      <h1>{item.urllink}</h1>
      <div className="grid grid-flow-col grid-cols-[1fr_1fr_1fr]">
        <h1>{item.username}</h1>
        <h1>{item.password}</h1>
        <div>
          <button onClick={deleteData} className="mr-2"><FontAwesomeIcon icon={faTrashAlt} /></button>
          <button onClick={editData} className="ml-1"><FontAwesomeIcon icon={faEdit} /></button>
        </div>
      </div>
    </div>
  );
};

export default Data;
