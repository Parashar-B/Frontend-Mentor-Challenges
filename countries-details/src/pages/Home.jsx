import {AiOutlineSearch} from 'react-icons/Ai'
import {BiChevronDown} from 'react-icons/bi'

export default function Home(){
    return(
        <div className="bg-red-100 h-[100vh] pt-[5rem]">
            <div className="bg-green-200 px-[4rem] py-[3rem] h-full">
                <div className="bg-pink-200 h-[15%] flex justify-between text-[0.9rem]">
                    <div className="bg-white flex drop-shadow-md h-[65%] w-[30%] rounded px-[0.2rem]">
                        <div className="w-[15%] h-full flex items-center justify-end cursor-pointer">
                            <AiOutlineSearch className='mr-2 text-gray-400' size='1.5rem'/>
                        </div>
                        <div className="w-[85%] h-full">
                            <input type="text" placeholder="Search for a country..." className="h-full w-full px-[1rem] "/>
                        </div>
                    </div>
                    <div className="flex bg-white drop-shadow-md w-[12%] h-[65%] rounded cursor-pointer">
                        <div className=' w-[80%] h-full flex items-center'>
                            Filter by Region
                        </div>
                        <div className=' w-[20%] h-full flex items-center'>
                            <BiChevronDown className='bg-yellow-500'/>
                        </div>
                    </div>
                </div> 
                <div className="bg-blue-200 h-[85%]">

                </div>
            </div>
        </div>
    )
}