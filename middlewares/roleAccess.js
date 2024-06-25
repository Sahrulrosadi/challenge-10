const roleAcces = (userRole, endpoint) => {
    if(endpoint === '/quiz' && userRole ==='superadmin'){
        console.log(userRole)
        console.log(endpoint)
        return true 
    }else {
        return false
    }


}

export default roleAcces