export default function Navbar(){
    return(
        <div className="flex h-[100px] p-[2rem] bg-red-200">
            <div className="w-[50%] bg-green-200">
                <h1 className="font-barlow text-[2rem]">sunnyside</h1>
            </div>
            <div className="w-[50%] flex justify-end bg-blue-200">
                <div className="w-[80%] flex">
                    <div className="">
                        About
                    </div>
                    <div className="">
                        Services
                    </div>
                    <div className="">
                        Projects
                    </div>
                    <div className="">
                        CONTACT
                    </div>
                </div>
            </div>
        </div>
    )
}