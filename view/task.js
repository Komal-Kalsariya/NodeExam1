
const postData=async()=>{
    let res=await fetch("http://localhost:8090/task")
    let data=await res.json()

}

const handledata=(e)=>{
    e.preventDefault()

    let data={
        taskname:document.getElementById("task").value,
        description:document.getElementById("des").value,
        status:document.getElementById("status").value
    }
    postData(data)

}
document.getElementById("datas").addEventListener("submit",handledata)