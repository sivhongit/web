import { Percent, Truck, Clock4, ShieldCheck } from "lucide-react"

const Delivery = () => {
  return (
    <div className="lg:container mx-auto shadow-md p-7 rounded-b-2xl">
        <div className="grid grid-cols-4">
            <div className="delivery_wrapper">
                <div className="flex items-center gap-4">
                    <p className="text-[#272343]"><Percent size='3rem'/></p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Discount</h4>
                        <p className="text-sm text-[#9a9caa] font-inter font-normal ">Every week new sales</p>
                    </div>
                </div>
            </div>

            <div className="delivery_wrapper">
                <div className="flex items-center gap-4">
                    <p className="text-[#272343]"><Truck size='3rem'/></p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Free Delivery</h4>
                        <p className="text-sm text-[#9a9caa] font-inter font-normal ">100% Free for all orders</p>
                    </div>
                </div>
            </div>
            <div className="delivery_wrapper">
                <div className="flex items-center gap-4">
                    <p className="text-[#272343]"><Clock4  size='3rem'/></p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Great Support 24/7</h4>
                        <p className="text-sm text-[#9a9caa] font-inter font-normal ">We care about your experience</p>
                    </div>
                </div>
            </div>
            <div className="delivery_wrapper">
                <div className="flex items-center gap-4">
                    <p className="text-[#272343]"><ShieldCheck  size='3rem'/></p>
                    <div>
                        <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Secure Payment</h4>
                        <p className="text-sm text-[#9a9caa] font-inter font-normal ">100% Secure Payment Method</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Delivery