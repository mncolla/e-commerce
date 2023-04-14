export interface CardProps {
    src: string,
    title: string,
    shortDesc: string,
    price: number,
    rating: number
}

const Card = ({ src, title, shortDesc, price, rating }: CardProps) => {
    return (
        <div className="card w-80 shadow-lg cursor-pointer">
            <figure><img src={src} alt="Shoes" className="scale-95 hover:scale-100 ease-in duration-200 " /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <span className="card-title">{title}</span>
                    <span className="font-bold">{price}</span>
                </div>
                <p>{shortDesc}</p>
                <div className="rating">
                    {[...Array(rating)].map((star: any, i) => <input key={star + i} type="radio" disabled checked name="rating-2" className="mask mask-star-2 bg-orange-400" />)}
                </div>
                <div className="card-actions justify-start mt-2">
                    <button className="btn btn-outline">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
export default Card