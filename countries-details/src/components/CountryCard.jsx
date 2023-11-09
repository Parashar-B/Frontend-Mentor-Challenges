import {useContext} from 'react'
import { RootContext } from "../App.jsx";

export default function CountryCard(props){

    const {setSelectedCountry, setShowCountryDetails} = useContext(RootContext);

    return(
            <div className="w-full h-[310px] rounded-[5px] bg-white shadow-xl cursor-pointer" 
                onClick={()=>{
                    setSelectedCountry(props?.countryDetails)
                    setShowCountryDetails(true);
                }}
            >
                <div className="h-[50%] ">
                    <img
                        alt={'country_flag'}
                        src={props?.countryDetails?.flags?.png}
                        className="h-full w-full rounded-t-[5px]"
                    />
                </div>
                <div className="h-[50%] px-[1.5rem] py-[1rem]">
                    <div className="h-[30%] flex items-center">
                        <h1 className="font-extrabold">{props?.countryDetails?.name?.common}</h1>
                    </div>
                    <div className="h-[70%] text-[0.8rem] font-semibold">
                        <h4>Population: <span className="font-normal">{props?.countryDetails?.population}</span></h4>
                        <h4>Region: <span className="font-normal">{props?.countryDetails?.region}</span></h4>
                        <h4>Capital: 
                            <span className="font-normal">
                                {
                                    props?.countryDetails?.capital?.map((item, index)=>{
                                        if(index > 0)
                                            return ", "+item;
                                        else
                                            return " "+item;
                                    })
                                }
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
    )
}