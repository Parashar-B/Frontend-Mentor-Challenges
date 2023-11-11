export default function Navbar(){
    return(
        <div className="flex h-[100px] px-[2.5rem] py-[1.5rem] bg-red-200">
            <div className="w-[50%] bg-green-200">
                <h1 className="font-barlow text-[2rem] font-extrabold">sunnyside</h1>
            </div>
            <div className="w-[50%] flex justify-end bg-blue-200">
                <div className="w-[50%] flex bg-green-300 font-barlow">
                    <div className="w-[25%] flex items-center justify-center">
                        About
                    </div>
                    <div className="w-[25%] flex items-center justify-center">
                        Services
                    </div>
                    <div className="w-[25%] flex items-center justify-center">
                        Projects
                    </div>
                    <div className="w-[25%] font-fraunces bg-white flex items-center justify-center rounded-full">
                        CONTACT
                    </div>
                </div>
            </div>
        </div>
    )
}