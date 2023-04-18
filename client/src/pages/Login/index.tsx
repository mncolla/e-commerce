import Form from "./components/Form"

const Login = () => {

    return (
        <div className="w-full h-full flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="navbar fixed top-0 bg-base-100">
                <div className="container mx-auto">
                    <a className="btn btn-ghost normal-case text-xl">E-Commerce</a>
                </div>
            </div>
            <Form />
        </div>
    )
}
export default Login