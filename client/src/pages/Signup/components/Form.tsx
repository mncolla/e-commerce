import { PATH_AUTH, PATH_PAGE } from '../../../routes';
import { signup } from '../services/signup.service';

import { useNavigate } from "react-router-dom";
const Form = () => {

    const navigate = useNavigate();

    const handleClickHaveAccount = () => navigate(PATH_AUTH.login, { replace: true })

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const { target: { email, username, password } } = e;

        if (email.value && password.value) {
            const { data } = await signup(email.value, username.value, password.value)

            console.log("RESPONSE SIGNUP", data)
            /* dispatch(setUser(session)); */
            navigate(PATH_PAGE.dashboard, { replace: true });
        }
    }

    return (

        <form onSubmit={handleSubmit} className="card w-96 bg-base-100 text-slate-950 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-4xl mb-3 ">Registrate</h2>
                <h2 className="text-center text-l mb-10 ">Por favor ingresa los datos para poder registrarte.</h2>
                <label className="input-group mb-2">
                    <span className="h-12 p-2"><img src="/user.svg" className="h-full opacity-50" alt="User icon" /></span>
                    <input type="text" name="email" className="input w-full bg-gray-100" placeholder="Ingresa tu email" />
                </label>

                <label className="input-group mb-2">
                    <span className="h-12 p-2"><img src="/at.svg" className="h-full opacity-50" alt="User icon" /></span>
                    <input type="text" name="username" className="input w-full bg-gray-100" placeholder="Ingresa tu nombre de usuario" />
                </label>

                <label className="input-group mb-5">
                    <span className="h-12 p-2"><img src="/lock.svg" className="h-full opacity-50" alt="User icon" /></span>
                    <input type="password" name="password" className="input w-full bg-gray-100" placeholder=" Ingresa tu password" />
                </label>

                <button type="submit" className="btn btn-primary ">Registrarme</button>
                <a className="link link-hover text-center mt-4" onClick={handleClickHaveAccount}>¿Ya estás registrado? Inicia sesión.</a>
            </div>


        </form>

    )
}
export default Form