export default function Card(props){
    return(
        <div className={`w-full md:w-[35%] md:h-full py-[2rem] px-[3rem] ${props?.styleInfo?.bgColor} ${props?.styleInfo?.borderRadius}`}>
            <div className="h-[20%] flex items-center">
                <div className="w-[65px] h-[65px]">
                    <img 
                        alt="car_img"
                        src={props?.cardInfo?.img}
                    />
                </div>
            </div>
            <div className="max-md:my-[1rem] h-[15%]">
                <h1 className="font-bigShouldersD text-[2rem] text-white">
                    {props?.cardInfo?.title.toUpperCase()}
                </h1>
            </div>
            <div className="max-md:my-[1.5rem] h-[50%] max-md:flex max-md:items-center">
                <p className="font-lexendD tracking-wider text-gray-300 text-[0.9rem] leading-7 max-md:w-full">
                    {props?.cardInfo?.details}
                </p>
            </div>
            <div className="max-md:h-[55px] h-[15%] max-md:flex max-md:items-center">
                <button className={`bg-white w-[150px] h-[80%] md:h-[70%] rounded-full hover:bg-transparent border-2 border-white font-semibold ${props?.styleInfo?.textColor} hover:text-white`}>Learn More</button>
            </div>
        </div> 
    )
}