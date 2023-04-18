import { Navbar, Banner, Product, Brands } from "./components"
import { CardProps } from "./components/Product"
import { StoreProps } from "./components/Store"

const Home = () => {

    const data: CardProps[] = [{
        src: "https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/g/7/g733kda---foto-1.jpg",
        title: "Auriculares Gamer XZ35",
        shortDesc: "Auriculares con entrada 3.5",
        price: 350,
        rating: 5
    },
    {
        src: "https://playmania438.com.ar/wp-content/uploads/2022/04/buds-3-lite.jpg",
        title: "Auriculares Xiami Buds",
        shortDesc: "Auriculares earpods",
        price: 650,
        rating: 3
    }]

    const sellers: StoreProps[] = [
        {
            name: 'Samsung',
            bannerImg: 'https://http2.mlstatic.com/storage/official-stores-images/randers/background_home201806080444.jpg',
            profileImg: 'https://http2.mlstatic.com/D_Q_NP_636207-MLA25899966797_082017-AE.webp',
            link: '#'
        },
        {
            name: 'Xiaomi',
            bannerImg: 'https://http2.mlstatic.com/storage/official-stores-images/randers/background_home201806080444.jpg',
            profileImg: 'https://http2.mlstatic.com/D_Q_NP_636207-MLA25899966797_082017-AE.webp',
            link: '#'
        },
        {
            name: 'Apple',
            bannerImg: 'https://http2.mlstatic.com/storage/official-stores-images/randers/background_home201806080444.jpg',
            profileImg: 'https://http2.mlstatic.com/D_Q_NP_636207-MLA25899966797_082017-AE.webp',
            link: '#'
        },
        {
            name: 'Motorola',
            bannerImg: 'https://http2.mlstatic.com/storage/official-stores-images/randers/background_home201806080444.jpg',
            profileImg: 'https://http2.mlstatic.com/D_Q_NP_636207-MLA25899966797_082017-AE.webp',
            link: '#'
        }
    ]

    return (
        <div className="">
            <Navbar />
            <Banner />
            <div className="container mx-auto">
                <h2 className="text-3xl font-light mt-10">Ofertas de esta semana</h2>
                <div className="flex flex-wrap">
                    {data.map((elem: CardProps, i: number) => <Product src={elem.src} title={elem.title} shortDesc={elem.shortDesc} price={elem.price} key={i} rating={elem.rating} />)}
                </div>
            </div>

            <div className="container mx-auto">
                <h2 className="text-3xl font-light mt-10">Ultimos productos publicados</h2>
                <div className="flex flex-wrap">
                    {data.map((elem: CardProps, i: number) => <Product src={elem.src} title={elem.title} shortDesc={elem.shortDesc} price={elem.price} key={i} rating={elem.rating} />)}
                </div>
            </div>

            <div className="container mx-auto">
                <h2 className="text-3xl font-light mt-10">También te puede interesar</h2>
                <div className="flex flex-wrap">
                    {data.map((elem: CardProps, i: number) => <Product src={elem.src} title={elem.title} shortDesc={elem.shortDesc} price={elem.price} key={i} rating={elem.rating} />)}
                </div>
            </div>

            <Brands sellers={sellers} />

        </div>
    )
}
export default Home