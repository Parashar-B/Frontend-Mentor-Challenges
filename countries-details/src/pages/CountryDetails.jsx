import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {useContext} from 'react'
import { RootContext } from "../App.jsx";

export default function CountryDetails(){
    
    const {selectedCountry} = useContext(RootContext)

    return(
        <div className="h-full pt-[4rem]">
            <div className="px-[7rem] h-[80vh] bg-red-300">
                <div className="h-[20%] bg-gray-300">
                    <button className='bg-white w-[110px] py-[0.4rem] flex items-center justify-center gap-2 rounded text-[0.8rem]'>
                        <MdOutlineKeyboardBackspace size='1.1rem'/> Back
                    </button>
                </div>
                <div className="h-[60%] flex bg-green-300">
                    <div className='h-full w-[40%] bg-orange-400'>
                        <img
                            alt={'flag_img'}
                            src={selectedCountry?.flags?.png}
                            className="h-full w-full"
                        />
                    </div>
                    <div className='h-full w-[60%] bg-blue-400 flex items-center justify-end'>
                        <div className='bg-red-200 w-[85%] h-full py-[1rem]'>
                            <div className='h-[20%] bg-gray-300'>
                                <h1 className='bg-red-400 text-[25px] font-extrabold'>{selectedCountry?.name?.common}</h1>
                            </div>
                            <div className='h-[60%] bg-green-400 flex'>
                                <div className='w-[50%] h-full bg-red-200'>
                                    <h4>Native Name: </h4>
                                    <h4>Population: </h4>
                                    <h4>Region: </h4>
                                    <h4>Sub Region: </h4>
                                    <h4>Capital: </h4>
                                </div>
                                <div className=' w-[50%] h-full bg-blue-300'>
                                    <h4>Top Level Domain: </h4>
                                    <h4>Currencies: </h4>
                                    <h4>Languages: </h4>
                                </div>
                            </div>
                            <div className='h-[20%] bg-yellow-400'>
                                <h4>Border Countries: </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}