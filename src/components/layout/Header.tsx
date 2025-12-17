import {Link, NavLink} from "react-router-dom";
import ribbon from '/img/ribbon.png';
import snow_logo from '/img/snow_logo.svg';
import '../../css/Header.scss';

// SVG 아이콘 (언어 선택 버튼)
const GlobalIcon: React.FC = () => (
  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[29px] h-[28px] stroke-current stroke-[1.86]">
    <path d="M27.52 14C27.52 15.7072 27.1837 17.3976 26.5304 18.9749C25.8771 20.5521 24.9195 21.9852 23.7124 23.1924C22.5052 24.3995 21.0721 25.3571 19.4949 26.0104C17.9176 26.6637 16.2272 27 14.52 27C12.8128 27 11.1224 26.6637 9.54512 26.0104C7.96789 25.3571 6.53479 24.3995 5.32763 23.1924C4.12047 21.9852 3.16289 20.5521 2.50958 18.9749C1.85627 17.3976 1.52002 15.7072 1.52002 14C1.52002 10.5522 2.88966 7.24558 5.32763 4.80761C7.7656 2.36964 11.0722 1 14.52 1C17.9678 1 21.2744 2.36964 23.7124 4.80761C26.1503 7.24558 27.52 10.5522 27.52 14Z" stroke="currentColor" strokeWidth="1.86"/>
    <path d="M19.7252 13.9999C19.7252 15.7068 19.59 17.398 19.3287 18.9748C19.0688 20.5516 18.6853 21.9841 18.2017 23.1918C17.7194 24.3994 17.1462 25.3562 16.5157 26.01C15.8839 26.6626 15.208 26.9993 14.5255 26.9993C13.843 26.9993 13.1671 26.6626 12.5366 26.01C11.9048 25.3562 11.3316 24.3981 10.8493 23.1918C10.3657 21.9841 9.98222 20.5529 9.72093 18.9748C9.45432 17.33 9.32216 15.6662 9.32575 13.9999C9.32575 12.2931 9.45965 10.6019 9.72093 9.0251C9.98222 7.44828 10.3657 6.01575 10.8493 4.80811C11.3316 3.60048 11.9048 2.64373 12.5353 1.98986C13.1671 1.33859 13.843 1.00061 14.5255 1.00061C15.208 1.00061 15.8839 1.33729 16.5144 1.98986C17.1462 2.64373 17.7194 3.60178 18.2017 4.80811C18.6853 6.01575 19.0688 7.44698 19.3287 9.0251C19.5913 10.6019 19.7252 12.2931 19.7252 13.9999Z" stroke="currentColor" strokeWidth="1.86"/>
    <path d="M1.52002 14H27.5187" stroke="currentColor" strokeWidth="1.86" strokeLinecap="round"/>
  </svg>
); 

const NAV_ITEMS = [
    {name:"소파", path: "/sofa"},
    {name:"테이블", path: "/table"},
    {name:"조명", path: "/light"},
    {name:"취향찾기", path: "/taste"},
    {name:"리뷰", path: "/review"},
    {name:"MONCASA", path: "/main"}
];
const Header: React.FC = () => {
    return(
        <header className="bg-black/10 text-white fixed top-0 left-0 w-full z-50">
            <div className="w-full flex justify-between items-center px-4 md:px-10 flex-wrap">
                {/*로고*/}
                {/*<div className="text-3xl font-light tracking-wide">MONCASA</div>*/}
                {/*<h1 className="flex items-center relative">*/}
                <div className="snow-edge relative w-[200px] h-[50px] xl:w-[300px] xl:h-[100px] md:w-[300px] md:h-[80px] top-[25px] md:top-[0px]">
                    <img src={ribbon} className="absolute w-[80px] top-[0px] left-[10px] z-10"></img>
                    <Link to="/"><img src={snow_logo} alt="MONCASA Logo" 
                                    className="absolute w-[150px] top-[30px] left-[40px] z-5
                                                sm:w-[150px] md:w-[200px]"/>
                    </Link>
                </div>

                {/*오른쪽 영역*/}
                <div className="flex items-center flex-wrap gap-y-2 md:gap-8">    
                    {/*메뉴*/}
                    <nav className="flex gap-4 md:gap-8 text-sm md:text-xl order-2 xl:order-1 md:order-1">
                        {NAV_ITEMS.map((item) => (
                        <NavLink key={item.name}
                                 to={item.path}
                                 className="px-3 py-2 sm:px-2 sm:py-3 md:px-4 md:py-2 rounded-full text-sm bg-white/40
                                            xl:bg-transparent xl:rounded-none xl:text-xl xl:text-white
                                            whitespace-nowrap hover:bg-white xl:hover:bg-transparent font-pretendardMedium"
                          ><span className="text-black/50 xl:text-white">
                            {item.name}
                            </span></NavLink>
                          ))}
                    </nav>
                    <button className="flex items-center gap-2 border border-white px-3 py-2 xl:px-6 xl:py-2 rounded-full text-lg
                                       hover:bg-white hover:text-[#713131] hover:border-white order-1 xl:order-2 md:order-2 bg-white/40 xl:bg-transparent
                                       ml-[380px] md:ml-auto xl:ml-0">
                        <GlobalIcon/>
                        KOR
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;