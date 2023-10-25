import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services , setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="text-center mt-6 space-y-3">
            <h3 className="text-2xl text-[#FF3811] font-bold">Services</h3>
            <h2 className="text-5xl text-[#252423f0] font-bold">Our  Service Area</h2>
            <p className="text-[#737373] max-w-[700px] mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id} service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;