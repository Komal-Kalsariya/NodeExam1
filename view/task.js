
// const postData=async()=>{
//     let res=await fetch("http://localhost:8090/task")
//     let data=await res.json()

// }
const postdata = (data) => {
    fetch("http://localhost:8090/task", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })

}

const handledata=(e)=>{
    e.preventDefault()

    let data={
        taskname:document.getElementById("task").value,
        description:document.getElementById("des").value,
        status:document.getElementById("status").value
    }
    postdata(data)

}
document.getElementById("datas").addEventListener("submit",handledata)