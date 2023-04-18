export interface StoreProps {
    name: string,
    bannerImg: string,
    profileImg: string,
    link: string
}

const Store = (props: StoreProps) => {
    const {
        name,
        bannerImg,
        profileImg,
        link } = props;

    return (
        <div className="card w-64 bg-base-100 shadow-xl image-full">
            <figure><img src={bannerImg} alt="Background" /></figure>
            <div className="card-body items-center">
                <div className="w-20">
                    <img src={profileImg} className="w-24" alt="Logo" />
                </div>
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-center">
                    <a href={link} className="link">Ver tienda</a>
                </div>
            </div>
        </div>
    )
}
export default Store