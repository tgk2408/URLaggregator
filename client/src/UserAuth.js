const UserAuth = () => {
    const token = localStorage.getItem("token");
    const username= localStorage.getItem("name");
    const email = localStorage.getItem("email");
    return token && username && email;
}
 
export default UserAuth;