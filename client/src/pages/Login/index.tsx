import { login } from './services/login.service';

const Login = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const { target: { email, password } } = e;

        if (email.value && password.value) {
            await login(email.value, password.value)
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