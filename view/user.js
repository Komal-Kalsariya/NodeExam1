
const postData=async()=>{
    let res=await fetch("http://localhost:8090/user")
    let data=await res.json()
    console.log(data);
    
 }

const handledata=(e)=>{
    e.preventDefault()

    let data={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    postData(data)
  

}
document.getElementById("datas").addEventListener("submit",handledata)