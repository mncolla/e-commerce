import { useNavigate } from "react-router-dom"
import { PATH_PAGE } from "../../../routes";

const CATEGORIES = [
    "Teléfonos",
    "Accesorios",
    "Fundas",
]
const BRANDS = [
    "Apple",
    "Samsung",
    "Xiaomi",
]

const Navbar = () => {

    const navigate = useNavigate();

    const handleAccountClick = () => navigate(PATH_PAGE.dashboard)
    const handleCartClick = () => navigate(PATH_PAGE.cart)

    return (
        <div className="fixed w-full left-0 bg-base-100">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Ofertas</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Categorias
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    {CATEGORIES.map((category: string, i: number) => <li key={category + i}><a>{category}</a></li>)}
                                </ul>
                            </li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Marcas
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    {BRANDS.map((brand: string, i: number) => <li key={brand + i}><a>{brand}</a></li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">E-Commerce</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Ofertas</a></li>
                        <li tabIndex={0}>
                            <a>
                                Categorias
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                {CATEGORIES.map((brand: string, i: number) => <li key={brand + i}><a>{brand}</a></li>)}
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Marcas
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                {BRANDS.map((brand: string, i: number) => <li key={brand + i}><a>{brand}</a></li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-xs mx-1" onClick={handleCartClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <span className="ml-1 hidden md:block">Carrito</span>
                    </a>
                    <a className="btn text-xs mx-1" onClick={handleAccountClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span className="ml-1 hidden md:block">Cuenta</span>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Navbar