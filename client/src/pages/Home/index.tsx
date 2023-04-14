import { Navbar, Banner, Filters, Card } from "./components"
import { CardProps } from "./components/Card"

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

    return (
        <div className="w-full h-full ">
            <Navbar />
            <Banner />
            <Filters />
            <div className="w-8/12 mx-auto">
                <h2 className="text-3xl font-semibold mt-10">Headphones for you</h2>
                <div className="flex flex-wrap">
                    {data.map((elem: CardProps, i: number) => <Card src={elem.src} title={elem.title} shortDesc={elem.shortDesc} price={elem.price} key={i} rating={elem.rating} />)}
                </div>
            </div>
        </div>
    )
}
export default Home