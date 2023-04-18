import { PropsWithChildren } from 'react'
import { Store } from './'
import { StoreProps } from './Store'

interface BrandsProps extends PropsWithChildren {
    sellers: StoreProps[]
}

const Brands = ({ sellers }: BrandsProps) => {
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-light mt-10">Las mejores tiendas</h2>
            <div className="flex justify-center mt-3">
                {sellers.map((elem: StoreProps, i: number) => <Store key={`${elem.link}+${i}`} {...elem} />)}
            </div>
        </div>
    )
}
export default Brands