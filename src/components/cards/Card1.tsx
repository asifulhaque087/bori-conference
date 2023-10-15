import React from "react";

const Card1 = () => {
    return (
        <>
            <div className=" md:w-[35%]   flex flex-col gap-[20px] w-[90%] border border-stone-200">
                {/* ----------top------- */}

                <div className="w-[100%] h-[155px] object-cover bg-red-600">
                    <img className="w-[100%] h-[100%]" 
                        src="https://c1.wallpaperflare.com/preview/299/942/376/building-city-tower-sky-scraper.jpg"
                        alt=""
                    />
                </div>

                {/* ---------down--------- */}
                <div className=" px-[15px] pb-[25px]">
                    <h3 className="font-[600] text-blue-700 text-[20px]">
                        February 2024 in Lisbon
                    </h3>
                    <p className="pt-[18px] text-slate-900">
                        Conference Code: 24PTLI02ICOOC001<br/> 
                        Abstract/Full-Text Paper Submission: October 17, 2023<br/>
                        Notification of Acceptance/Rejection: October 31, 2023<br/> 
                        Final Paper and Early Bird Registration: September 30, 2024 <br/>
                        Conference Date: February 05-06, 2024
                    </p>
                </div>
            </div>
        </>
    );
};

export default Card1;
