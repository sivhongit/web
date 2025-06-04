import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from './../SectionTitle/SectionTitle';


const Categories = () => {

    const categories = [
        {
            title: 'Wing Chair',
            products: '3,584 Products',
            image: '/src/assets/categories/categories_1.jpg',
        },
        {
            title: 'Wooden Chair',
            products: '157 Products',
            image: '/src/assets/categories/categories_2.jpg',
        },
        {
            title: 'desk Chair',
            products: '154 Products',
            image: '/src/assets/categories/categories_3.jpg',
        },
        {
            title: 'Park Bench',
            products: '154 Products',
            image: '/src/assets/categories/categories_4.jpg',
        },

    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div>
            <div className="lg:container mx-auto ">
                <SectionTitle title="Top Categories" mb='mb-11'></SectionTitle>

                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {
                            categories?.map((category, index) => (
                                <div key={index} className="p-5">
                                    <div className="feature_image mb-4 relative">
                                        <img className="w-full h-[450px] rounded-lg object-cover" src={category?.image} alt={category?.title} />
                                        <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 flex flex-col justify-center p-5">
                                            <h4 className="text-xl text-black font-semibold font-inter mb-2 capitalize">{category?.title}</h4>
                                            <p className="text-sm text-black capitalize font-normal font-inter">{category?.products}</p>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Categories;