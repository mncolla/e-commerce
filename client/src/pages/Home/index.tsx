import { useEffect, useState } from "react"
import axiosInstance from "../../utils/axiosInstance"

const Home = () => {

    const [me, setMe] = useState('')

    useEffect(() => {
        axiosInstance.post('auth/me')
            .then((userInfo: any) => setMe(JSON.stringify(userInfo)))
    }, [])


    return (
        <div>{me}</div>
    )
}
export default Home