
 const postdata = (data) => {
    fetch("http://localhost:8090/user/signup", {
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
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    postdata(data)
  

}
document.getElementById("datas").addEventListener("submit",handledata)