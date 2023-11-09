import {AiOutlineSearch} from 'react-icons/Ai'
import {BiChevronDown} from 'react-icons/bi'
import CountryCard from '../components/CountryCard'
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { RootContext } from "../App.jsx";
import CountryDetails from './CountryDetails';

export default function Home(){

    const [allCountries, setAllCountries] = useState([]);
    const {showCountryDetails} = useContext(RootContext)

    const getAllCountries = async()=>{
        const response = await axios({
            method: 'GET',
            url: 'https://restcountries.com/v3.1/all'
        });

        setAllCountries(response.data);
    }

    useEffect(()=>{
        getAllCountries()
    },[])

    return(
        <div className=" min-h-[100vh] pt-[5rem]">
            {
                showCountryDetails
                ?
                    <CountryDetails/>
                :
                <div className=" px-[7rem] py-[3rem] h-full ">
                    <div className="h-[100px] flex justify-between text-[0.8rem] ">
                        <div className="bg-white flex shadow-[0px_2px_8px_lightgray] h-[50%] w-[30%] rounded px-[0.2rem]">
                            <div className="w-[15%] h-full flex items-center justify-end cursor-pointer">
                                <AiOutlineSearch className='mr-2 text-gray-500' size='1.3rem'/>
                            </div>
                            <div className="w-[85%] h-full">
                                <input type="text" placeholder="Search for a country..." className="h-full w-full px-[1rem] "/>
                            </div>
                        </div>
                        <div className="flex bg-white shadow-md w-[12%] h-[50%] rounded cursor-pointer">
                            <div className=' w-[80%] h-full flex items-center justify-around'>
                                Filter by Region
                            </div>
                            <div className=' w-[20%] h-full flex items-center'>
                                <BiChevronDown className='' size='1.1rem'/>
                            </div>
                        </div>
                    </div> 
                    <div className=" h-[85%] grid grid-cols-4 gap-[70px]">
                        {
                            allCountries?.map((country,index)=>{
                                return(
                                    <CountryCard key={index} countryDetails={country}/>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}