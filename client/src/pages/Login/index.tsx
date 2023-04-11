import { useDispatch } from "react-redux";
import { login } from './services/login.service';
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/states/user.state";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const { target: { email, password } } = e;

        if (email.value && password.value) {
            const { session } = await login(email.value, password.value)
            dispatch(setUser(session));
            navigate("/", { replace: true });
        }
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