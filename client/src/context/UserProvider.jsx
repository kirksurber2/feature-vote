
import { useState, createContext } from 'react'
import axios from 'axios'


// User Context *****************************
export const UserContext= createContext({})

// Function *******************************
export default function UserProvider ({children}) {
    
    const [userState, setUserState] = useState({
        user: JSON.parse(localStorage.getItem('user')) || {}, 
        token: localStorage.getItem('token') || ""
        
    })
    

   async function signup(user) { 
       axios.post('http://localhost:9000/auth/signup', user)
       .then(res => {
           const {user, token} = res.data
           localStorage.setItem("token", token)
           localStorage.setItem('user', JSON.stringify(user))
           setUserState(prevUserState => ({
               ...prevUserState, user, token
            })
            
            )
           
        })
        
        .catch(error => console.log(error))

    //    try{
    //       const res = await axios.post('http://localhost:9000/auth/signup', credentials, {headers: {"Content-Type": 'application/json'}})
    //     if(!res.ok) {
    //         throw new Error("There was no response from the server")
    //     }
    //         const data = await res.json()
    //         setUserState(res.data)
            
    //     }
    //     catch(error) {
    //         if(error.response){
    //         console.log("There is a response error of: ")
    //         console.log(error.response.data)
    //         console.log(error.response.status)
    //         console.log(error.response.headers)
    //     }else if(error.request){
    //         console.log("There is a request error of: ", error.request)
    //     }else {
    //         console.log('Error', error.message)
    //     }
    //     }
       
    }

    function login(credentials) {
        axios.post('http://localhost:9000/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState, user, token
                }))
               
            })
    }
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {}, token: ""
        })
    }
    function checkUser() {
        console.log('user Check')
    }

    return (
        <UserContext.Provider
            value = {{
                ...userState,
                signup,
                login

            }}
        >
            {children}

        </UserContext.Provider>
    )
}

