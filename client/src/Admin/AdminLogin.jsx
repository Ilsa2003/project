import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./admin.css"

function AdminLogin() {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const LoginAdmin = async () => {
        if (username === "" || password === "") {
            alert("fill the blanks")
        } else {
            const bodyjson = {
                username: username,
                password: password
            }
            axios.post("https://internareabackend-d07z.onrender.com/api/admin/adminLogin", bodyjson).then((res) => {
                console.log(res, "Data is sent")
                alert("Succesfully Logged In")
                navigate("/adminpanel")
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
            <div class="bg-cover bg-center">
                <div class="h-screen flex justify-center items-center">
                    <div class="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 class="text-3xl font-bold mb-8 text-center">Admin Login</h1>
                        <form>
                            <div class="mb-4">
                                <label class="block font-semibold text-gray-700 mb-2" for="email">Admin Name</label>
                                <input class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder=" Admin Name" value={username} onChange={(e) => setusername(e.target.value)} />
                            </div>
                            <div class="mb-4">
                                <label class="block font-semibold text-gray-700 mb-2" for="password">Password</label>
                                <input class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div class="mb-6">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={LoginAdmin}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin
