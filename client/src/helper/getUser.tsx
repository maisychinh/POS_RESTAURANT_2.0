const getUser = () =>{
    return {
        name: localStorage.getItem("user"), 
        role: localStorage.getItem("role")
    }
}

export default getUser