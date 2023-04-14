const Banner = () => {
    return (
        <div className="w-full bg-slate-400  mt-10">
            <div className="w-8/12 mx-auto flex justify-between">
                <div className="h-full flex flex-col my-auto w-72 justify-center">
                    <span className="text-4xl">Promoción por el día del padre</span>
                    <button className="btn btn-primary mt-3">Comprar ahora</button>
                </div>
                <div className="">
                    <img src="/music.png" alt="" />
                </div>
            </div>

        </div>
    )
}
export default Banner