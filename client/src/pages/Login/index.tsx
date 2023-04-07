import fetcher from "../../utils/fetch"
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/states/user.state';
import { User } from '../../models'

const Login = () => {

    const dispatch = useDispatch();


    const apiLogin = async (email: string, password: string) => {

        const res = await fetcher.post('http://localhost:3000/api/v1/auth/login', {
            email, password
        })

        const user: User = res.data.token;

        dispatch(createUser(user))
        return user
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const login = await apiLogin(e.target.email.value, e.target.password.value)
        console.log("LOGIN INFO", login)
    }
    return (
        <div className="text-red w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col ">
                <input type="text" name="email" className="my-2" placeholder="Ingresa tu email" />
                <input type="password" name="password" className="my-2" placeholder="Ingresa tu password" />
                <button type="submit" className="my-2">Enviar</button>
            </form>
        </div>
    )
}
export default Login