import React from 'react';
import logo_white from '../img/logo_white.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#743333] text-white pt-16 pb-8 border-t border-[#c6b492]"> {/* 배경색과 상단 경계선 */}
            <div className="container mx-auto max-w-[1450px] px-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    
                    {/* 1. 로고 (좌측) */}
                    <div className="flex-shrink-0 mb-8 md:mb-0">
                        {/* 이미지 파일 경로에 맞게 src를 수정하세요 */}
                        <a href="#">
                            <img src={logo_white} alt="MONCASA Logo" className="w-[150px] sm:w-[200px]"/> 
                        </a>
                    </div>
                    
                    {/* 2. 고객센터 및 회사 정보 그룹 (우측) */}
                    <div className="flex flex-col sm:flex-row justify-end gap-12 text-sm sm:text-base">
                        
                        {/* 2-1. 고객센터 (Call Center) */}
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg mb-2">고객센터 1588-0000</h3>
                            <p className="text-gray-300">평일 09:00 ~ 17:00 (주말 및 공휴일 휴무)</p>
                            <p className="text-gray-300">점심 12:00 ~ 13:00</p>
                        </div>

                        {/* 2-2. 브랜드 소개 및 약관 */}
                        <div className="flex flex-col gap-1.5 text-gray-300 text-sm w-[150px]">
                            <a href="#" className="hover:text-white">브랜드 소개</a>
                            <a href="#" className="hover:text-white">이용약관 | 이용안내</a>
                            <a href="#" className="hover:text-white">개인정보처리방침</a>
                        </div>
                        
                        {/* 2-3. 회사 정보 (Company Info) */}
                        <div className="text-gray-300 text-sm max-w-lg space-y-1">
                            <p>(주)MONCASA | 대표: 김제니 | 서울 용산구 한남동 | 사업자등록번호: 123-45-67890 | <a href="#" className="underline">사업자정보확인</a></p>
                            <p>통신판매업신고번호: 2025-몬까사-0725 | 이메일: moncasa@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* 카피라이트 (하단 중앙) */}
                <div className="text-center text-sm mt-16 pt-4 border-t border-t-[#8d4b4b]"> {/* 상단 구분선 추가 */}
                    Copyright 2025. MONCASA All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;