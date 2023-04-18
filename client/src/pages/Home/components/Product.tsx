export interface CardProps {
    src: string,
    title: string,
    shortDesc: string,
    price: number,
    rating: number
}

const Product = ({ src, title, shortDesc, price, rating }: CardProps) => {
    return (
        <div className="card w-56 shadow-lg cursor-pointer -z-10">
            <figure><img src={src} alt="Shoes" className="scale-95 hover:scale-100 ease-in duration-200 " /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <span className="card-title text-sm">{title}</span>
                    <span className="font-bold text-sm">{price}</span>
                </div>
                <p className="text-xs">{shortDesc}</p>
                <div className="rating rating-sm">
                    {[...Array(rating)].map((star: any, i) => <input key={star + i} type="radio" disabled checked name="rating-2" className="mask mask-star-2 bg-orange-400" />)}
                </div>
                <div className="card-actions justify-start mt-2">
                    <button className="btn btn-sm btn-outline">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
export default Product