import {HiOutlineMoon} from 'react-icons/hi'

export default function NavBar(){
    return(
        <div className="flex items-center justify-between px-[7rem] h-[5rem] drop-shadow-md bg-white fixed w-full">
            <div>
                <h1 className="text-[20px] font-extrabold ">Where in the world?</h1>
            </div>
            <div className=''>
                <button className='flex items-center'>
                    <HiOutlineMoon className='mr-[0.5rem]'/>
                    <h3 className='font-semibold'>Dark Mode</h3>
                </button>
            </div>
        </div>
    )
}