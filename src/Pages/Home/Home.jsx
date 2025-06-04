import Banner from "../../Components/Banner/Banner"
import Delivery from "../../Components/Delivery/Delivery"
import Brand from "../../Components/Brand/Brand"
import Features from "../../Components/Features/Features"
import Categories from "../../Components/Categories/Categories"
import Product from "../../Components/Product/Product"
import Client from "../../Components/Client/Client"
import Recent from "../../Components/Recent/Recent"

const Home = () => {
  return (
    <div className="bg-white">
    
      <div className="w-full main-h-[850px] bg-[#f0f2f3] flex items-center justify-center">
        <Banner></Banner>
      </div>
      <div className="delivery_component w-full min-h-[#150px] bg-gray-50  ">
        <Delivery></Delivery>
      </div>
      <div className="brand flex items-center h-[171px] justify-center w-full  bg-white mt-8 mb-8">
        <Brand></Brand>
      </div>
      <div className="w-full flex items-center justify-center bg-white mb-[80px]">
        <Features></Features>
      </div>
      <div className="w-full flex items-center justify-center bg-white mb-[80px]">
        <Categories></Categories>
      </div>
      <div className="w-full flex items-center justify-center pb-[80px]">
        <Product></Product>
      </div>
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">
        <Client></Client>
      </div>
      <div className="w-full flex items-center justify-center pb-[80px] pt-[80px]">
        <Recent></Recent>
      </div>

    </div>
  )
}

export default Home