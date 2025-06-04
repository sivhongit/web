import { Armchair, Check, Info, Search, ShoppingCart, Heart, Menu } from "lucide-react"
import { Link, NavLink } from "react-router"


const Navbar = () => {
  return (
    <div>
        <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">
            <div className="lg:container flex justify-between items-center">
                <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
                    <Check />Free on all orders over $50
                </p>
                <div className="navbar_top_right flex items-center gap-6">
                    <select defaultValue="Server location" className="bg-none h-[17px] w-[75px]
                    text-sm font-inter font-normal capitalize text-white">
                        <option>english</option>
                        <option>khmer</option>
                    </select>           
                    <button><Link>Faqs</Link></button>
                    <button><Link className="flex items-center text-sm text-white font-inter font-normal capitalize"><Info />need help</Link></button>
                </div>

            </div>
        </div>
        <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
            <div className="lg:container grid grid-cols-3 justify-items-center items-center">
                <div className="logo_wrapper">
                    <Link to='/' className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2">
                        <Armchair size='2rem' color="#029fae"/> comforty
                    </Link>
                </div>
                <div className="search_box">
                    <form action="#" className="max-w-[443px] h-[44px] relative">
                        <input type="text" placeholder="Search here..." className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4" />

                        <button className="absolute to-50% right-4 translate-y-1/2"><Search size='22px' color="#272343"/></button>
                    </form>
                </div>
                <div className="navbar_middle_right flex items-center gap-4">
                    <button className="btn capitalize">
                        <ShoppingCart /> cart <div className="badge badge-sm bg-[#029fae]">2</div>
                    </button>
                    <button className="btn capitalize">
                        <Heart />
                    </button>
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">User</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a><Link>Account</Link></a></li>
                        <li><a><Link>Logout</Link></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
            <div className="lg:container flex item-center justify-between">
                <div className="navbar_bottom_lelf flex items-center gap-8">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"><Menu /> all categories</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Chair</a></li>
                            <li><a>T-Shirt</a></li>
                            <li><a>Pants</a></li>
                            <li><a>Shirt</a></li>
                            <li><a>Table</a></li>
                        </ul>
                    </div>
                <nav className="flex items-center gap-8">
                    <NavLink to='/' className='text-sm text-[#029fae] font-inter font-medium capitalize'>Home</NavLink>
                    <NavLink  className='text-sm text-[#636270] font-inter font-medium capitalize'>shop</NavLink>
                    <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>product</NavLink>
                    <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>pages</NavLink>
                    <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>about</NavLink>
                </nav>

                </div>
                <div className="navbar_bottom_right">
                    <p className="text-sm text-[#636270] font-inter font-normal capitalize">contact: <span className="text-[#272343]">(+885) 8888-8888</span></p>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Navbar