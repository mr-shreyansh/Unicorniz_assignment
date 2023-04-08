import FormCard from "@/components/form_card";
import pic from "../assets/banner_01.jpg";
import Image from "next/image";
import pay from "../assets/pay.svg";
import research from "../assets/research.svg";
import order from "../assets/ticket-1.svg";
import ticket from "../assets/ticket.svg";
import arrow from "../assets/arrow1.png";
import add from "../assets/add.jpg";
const FerryPage = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:p-8 ">
            <div>
                <h1 className="mx-5 my-5 font-bold text-[2vw]">Book Your Andaman Ferry</h1>
                <FormCard classname="shadow-xl p-3" />
            </div>
            <div className="">
                <Image src={pic} alt="ferry" width={1000} height={500} className="my-5"/>
                <h1>Andaman Ferry Booking Process</h1>
                <div className="grid grid-cols-2 xl:grid-cols-7 justify-items-center">
                    <div className="w-32 text-center flex flex-col justify-center content-center items-center">
                        <Image src={research} alt="ferry" width={60} height={50} className="my-5"/>
                        <h1 className="text-orange-600">Search</h1>
                        <p className="text-sm break-word">and compare ferries from a large selection</p>
                    </div>
                    <Image src={arrow} alt="ferry" width={60} height={50} className="my-5 hidden xl:inline-flex ms-8"/>
                    <div className="w-32 text-center flex flex-col justify-center content-center items-center">
                        <Image src={order} alt="ferry" width={60} height={50} className="my-5"/>
                        <h1 className="text-red-500">Order</h1>
                        <p className="text-sm break-word">tickets by securely paying only $2 per ticket</p>
                    </div>
                    <Image src={arrow} alt="ferry" width={60} height={50} className="my-5 hidden xl:inline-flex flex ms-8"/>

                    <div className="w-32 text-center flex flex-col justify-center content-center items-center">
                        <Image src={ticket} alt="ferry" width={60} height={50} className="my-5"/>
                        <h1 className="text-blue-500">Receive</h1>
                        <p className="text-sm break-word">your confirmed ticket in 3-4 working hours</p>
                    </div>
                    <Image src={arrow} alt="ferry" width={60} height={50} className="my-5 hidden xl:inline-flex ms-8"/>

                    <div className="w-32 text-center flex flex-col justify-center content-center items-center">
                        <Image src={pay} alt="ferry" width={60} height={50} className="my-5"/>
                        <h1 className="text-green-500">Pay</h1>
                        <p className="text-sm break-word">the balance money in the next 24 hours & enjoy your trip</p>
                    </div>
                </div>
                <Image src={add} height={100} width={1000} />
            </div>
        </div>
    );
}


export default FerryPage;