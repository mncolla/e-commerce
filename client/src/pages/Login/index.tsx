import { useDispatch } from "react-redux";
import { login } from './services/login.service';
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/states/user.state";
import './style.css'

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
        <div className="w-full h-full flex justify-center items-center gradient">
            <form onSubmit={handleSubmit} className="flex flex-col form-control">
                <h2 className="text-center text-4xl mb-3 text-white">Iniciar sesión</h2>
                <h2 className="text-center text-l mb-16 text-white">Por favor ingresa tus credenciales para poder utilizar E-Commerce</h2>

                <label className="input-group mb-2">
                    <span className="h-12 p-2"><img src="/user.svg" className="h-full opacity-50" alt="User icon" /></span>
                    <input type="text" name="email" className="input w-full" placeholder="Ingresa tu email" />
                </label>

                <label className="input-group mb-5">
                    <span className="h-12 p-2"><img src="/lock.svg" className="h-full opacity-50" alt="User icon" /></span>
                    <input type="password" name="password" className="input w-full" placeholder=" Ingresa tu password" />
                </label>

                <button type="submit" className="btn btn-ghost text-white">Ingresar</button>
                <a className="link link-hover text-end mt-2 text-white">¿No tienes cuenta? Regístrate.</a>

            </form>
        </div>
    )
}
export default Login