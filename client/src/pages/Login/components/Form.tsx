import { login } from '../services/login.service';
import { setUser } from "../../../redux/states/user.state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATH_AUTH } from '../../../routes';

const Form = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDontHaveAccount = () => navigate(PATH_AUTH.signup, { replace: true })

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

        <form onSubmit={handleSubmit} className="card w-96 bg-base-100 text-slate-950 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-4xl mb-3 ">Iniciar sesión</h2>
                <h2 className="text-center text-l mb-10 ">Por favor ingresa tus credenciales para poder utilizar E-Commerce</h2>
                <label className="input-group mb-2">
                    <span className="h-12 p-2"><img src="/user.svg" className="h-full opacity-50" alt="User icon" /></span>
                    <input type="text" name="email" className="input w-full bg-gray-100" placeholder="Ingresa tu email" />
                </label>

                <label className="input-group mb-5">
                    <span className="h-12 p-2"><img src="/lock.svg" className="h-full opacity-50" alt="User icon" /></span>
                    <input type="password" name="password" className="input w-full bg-gray-100" placeholder=" Ingresa tu password" />
                </label>

                <button type="submit" className="btn btn-primary ">Ingresar</button>
                <a className="link link-hover text-center mt-4 " onClick={handleDontHaveAccount}>¿No tienes cuenta? Regístrate.</a>
            </div>


        </form>

    )
}
export default Form