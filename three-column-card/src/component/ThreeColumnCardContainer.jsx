import Card from "./Card";
import data from '../data/data.json'

export default function ThreeColumnCardContainer(){
    const customStyles = [ 
        {
            bgColor: 'bg-[#e38826]',
            borderRadius: 'max-md:rounded-t-[9px] md:rounded-l-[9px]',
            textColor: 'text-[#e38826]'
        },
        {
            bgColor: 'bg-[#006970]',
            borderRadius: 'rounded-none',
            textColor: 'text-[#006970]'
        },
        {
            bgColor: 'bg-[#004241]',
            borderRadius: 'max-md:rounded-b-[9px] md:rounded-r-[9px]',
            textColor: 'text-[#004241]'
        }
    ]

    return(
        <div className="w-[90%] md:w-[950px] md:h-[56%] flex flex-col md:flex-row bg-gray-400 rounded-[10px]">
            {
                data.map((info,index)=>{
                    return <Card key={index} cardInfo={info} styleInfo={customStyles[index]}/>
                })
            }
        </div>
    )
}