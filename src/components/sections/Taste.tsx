import '../../css/Taste.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { useState, useRef, useCallback } from 'react';

import SwiperCore from 'swiper';

import taste_icon from '/img/taste_icon.png';

    interface FurnitureOptions {
    [category: string]: {
        [key: string]: string[];
    };
    }

    const FURNITURE_OPTIONS: FurnitureOptions = {
        "테이블": {
            "가구의 크기를 골라주세요": ["S", "M", "L"],
            "소재를 선택해주세요!": ["메탈","우드","기타"],
            "컬러를 선택해주세요!": ["메탈릭","라이트","다크"],
            "형태를 선택해주세요!": ["원형","사각","더블"],
            "가격대를 선택해주세요!": ["~30만원","30~50만원","50~100만원","100만원~"]
        },
        "조명": {
            "가구의 크기를 골라주세요": ["S", "M", "L"],
            "소재를 선택해주세요!": ["메탈","우드","기타"],
            "컬러를 선택해주세요!": ["메탈릭", "라이트", "다크", "컬러풀"],
            "형태를 선택해주세요!": ["테이블조명", "스탠드조명", "천장조명"],
            "가격대를 선택해주세요!": ["~30만원","30~50만원","50~100만원","100만원~"]
        },
        "소파": {
            "가구를 사용하는 인원수를 골라주세요!": ["1인용","2인용", "3인용", "4인용 이상"],
            "소재를 선택해주세요!": ["가죽", "패브릭", "친환경소재", "방수"],
            "컬러를 선택해주세요!": ["다크", "비비드", "파스텔", "라이트"],
            "형태를 선택해주세요!": ["일체형", "모듈형", "리클라이너", "코너형"],
            "가격대를 선택해주세요!": ["~50만원", "50~100만원", "100~300만원", "300만원~"]
        }
    };  
import type { SofaSectionProps } from "../../types/interface"; 

const Taste:React.FC<SofaSectionProps> = ({cls = ""}) =>{

    const swiperRef = useRef<SwiperCore | null>(null);

    // --- 상태 관리 ---
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: string}>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [currentKeys, setCurrentKeys] = useState<string[]>([]);        

    // 카테고리 선택 핸들러
    const handleCategorySelect = useCallback((category: string) => {
        setSelectedCategory(category);
        setSelectedAnswers({});
        
        const keys = Object.keys(FURNITURE_OPTIONS[category]);
        setCurrentKeys(keys);
        setCurrentQuestionIndex(0); // 첫 번째 질문 인덱스로 초기화
        
        // 다음 슬라이드로 이동
        swiperRef.current?.slideTo(1, 600); 
    }, []);    

    // 옵션 선택 핸들러
    const handleOptionSelect = useCallback((key: string, value: string) => {
        // 1. 선택 내용 업데이트
        setSelectedAnswers(prev => ({
        ...prev,
        [key]: value
        }));
        
        // 2. 다음 단계로 진행
        const nextIndex = currentQuestionIndex + 1;
        
        if (nextIndex < currentKeys.length) {
            // 다음 질문이 남아있으면
            setCurrentQuestionIndex(nextIndex);
            swiperRef.current?.slideNext(600);
        } else {
            // 모든 질문이 끝났으면 결과 슬라이드로 이동
            setCurrentQuestionIndex(currentKeys.length); // 질문의 개수(마지막 슬라이드 인덱스)
            swiperRef.current?.slideNext(600);
        }
    }, [currentQuestionIndex, currentKeys.length]);

    // 처음으로 돌아가기 핸들러
    const handleRestart = useCallback(() => {
        setSelectedCategory(null);
        setSelectedAnswers({});
        setCurrentKeys([]);
        setCurrentQuestionIndex(0);
        swiperRef.current?.slideTo(0, 600);
    }, []);

    // 1단계: 메인 카테고리 렌더링
    const renderMainCategories = () => (
        Object.keys(FURNITURE_OPTIONS).map(cat => (
        <button 
            key={cat} 
            //className="category-button" 
            className={`category-button ${selectedCategory === cat ? 'selected' : ''}`}
            onClick={() => handleCategorySelect(cat)}
        >
            {cat}
        </button>
        ))
    );    

    const isAllAnswered = selectedCategory !== null && currentKeys.length > 0 && Object.keys(selectedAnswers).length === currentKeys.length;

    // 2단계 ~ 최종 전: 질문 및 옵션 렌더링
    const renderQuestionSlide = (keyIndex: number) => {
        if (!selectedCategory || !currentKeys.length) return null; // 카테고리 미선택 시 렌더링 안 함

        const key = currentKeys[keyIndex];
        const options = FURNITURE_OPTIONS[selectedCategory][key];
        const questionTitle = `Q${keyIndex + 2}`;

        return (
        <SwiperSlide key={keyIndex + 1} className={cls}>
            <p className ="text_sm">고객님의 취향의 가구를 인기순으로 추천해드릴게요.</p>
            <div className="flex">
                <p className="title1">{questionTitle}</p>
                <strong className="title2">
                {key}
                </strong>
            </div>
            <div className="dynamic-area">
            {options.map(opt => (
                <button
                key={opt}
                className={`option-button ${selectedAnswers[key] === opt ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(key, opt)}
                >
                {opt}
                </button>
            ))}

            {/* 마지막 질문이면 버튼 표시 */}
            {keyIndex === currentKeys.length - 1 && 
                <div className="button-group">
                    <button 
                    className="taste_btn restart-btn text_md fw-500"
                    onClick={handleRestart}
                    >
                    <svg className="arrow_ico" width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0675 0L16.4318 2.35308L6.40076 12.3362H50V15.6641H6.40107L16.4318 25.6469L14.0675 28L-2.38419e-06 14L14.0675 0Z" fill="currentColor"/>
                    </svg>
                    처음으로 가기
                    </button>
                    <p className="bar">|</p>
                    <a href="#result-page" 
                       className={`result-btn ${selectedCategory && currentKeys.length > 0 && Object.keys(selectedAnswers).length === currentKeys.length ? 'opacity-100' : 'opacity-40'}`} 
                       onClick={isAllAnswered ? handleLinkClick : (e) => e.preventDefault()}>
                    결과보러 가기
                        <svg className="arrow_ico" width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.9325 0L33.5682 2.35308L43.5992 12.3362H0V15.6641H43.5989L33.5682 25.6469L35.9325 28L50 14L35.9325 0Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            }
            </div>
        </SwiperSlide>
        );
    };    
    

    // handleLinkClick 함수: 결과보러가기 클릭 시 호출
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // 현재 선택된 답변 객체 selectedAnswers의 키 개수
        const selectedCount = Object.keys(selectedAnswers).length;
        const totalCount = currentKeys.length;

        // 모든 질문에 답변했을 경우에만 이동
        if (selectedCount === totalCount) {
            // 선택한 답변들을 콤마로 연결
            const combinedValue = Object.values(selectedAnswers).join(',');

            // 이동할 링크 생성
            const url = `http://moncasa.cafe24.com/product/search.html?keyword=${encodeURIComponent(combinedValue)}`;

            // 페이지 이동
            window.location.href = url;
        } else {
            alert('모든 항목을 선택해주세요!');
        }
    };
    // 최종 결과 렌더링
    {/*const renderResultSlide = () => (
        <SwiperSlide key="result">
        <h3>✅ 선택 결과</h3>
        <div className="dynamic-area">
            <pre>{JSON.stringify(selectedAnswers, null, 2)}</pre>
        </div>
        <div className="button-group">
            <button 
            className="taste_btn restart-btn text_md fw-500"
            onClick={handleRestart}
            >
            처음으로 가기
            </button>
            <p className="bar">|</p>
            <a href="#result-page">
            결과보러 가기
            </a>
        </div>
        </SwiperSlide>
    ); */}   

    return(
            <section id="taste" className={cls}>
                <div className="taste_bg">
                    <div className="flex-container">
                        <h2 className="title1">내 취향에 꼭 맞는 가구 찾기</h2>
                        <div className="right-group">
                            <p className="title2 text-right">안녕하세요, 고객님! MONCASA의 <br/>
                                가구 추천을 담당하는 CASA봇입니다</p>
                            <img src={taste_icon} className="taste_icon ml-4"/>
                        </div>
                    </div>

                    <Swiper
                        className="swiper-container"
                        onSwiper={(swiper) => { 
                            swiperRef.current = swiper; 
                            swiper.allowSlidePrev = false;
                            swiper.allowSlideNext = false;
                        }}
                        onSlideChange={(swiper) => {
                            if (swiper.activeIndex === 0) {
                                document.querySelector('.swiper-button-prev')?.classList.add('disabled');
                                document.querySelector('.swiper-button-next')?.classList.add('disabled');
                            } else {
                                document.querySelector('.swiper-button-prev')?.classList.remove('disabled');
                                document.querySelector('.swiper-button-next')?.classList.remove('disabled');
                            }
                        }}
                        speed={600}
                        navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        }}
                        scrollbar={{
                        el: ".swiper-scrollbar",
                        hide: false
                        }}
                        pagination={{
                        el: '.swiper-pagination',
                        type: "fraction",
                        }}
                        modules={[Navigation, Pagination, Scrollbar]}
                        allowTouchMove={false} // 버튼 클릭으로만 슬라이드 이동 허용
                    >
                        {/* Swiper 커스텀 네비게이션 및 스크롤바/페이지네이션 */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-scrollbar"></div>   
                        <div className="swiper-pagination"></div>
                        
                        {/* 1단계: 카테고리 선택 슬라이드 (index 0) */}
                        <SwiperSlide key={0} className="swiper-slide">
                            <p className ="text_sm">고객님의 취향의 가구를 인기순으로 추천해드릴게요.</p>
                            <div className="flex">
                                <p className="title1">Q1</p>
                                <strong className="title2">
                                어떤 가구를 찾으시나요?
                                </strong>
                            </div>
                            
                            <div className="dynamic-area">
                                {renderMainCategories()}
                            </div>
                        </SwiperSlide>
                        
                        {/* 2단계 ~ 최종 전: 질문 슬라이드 (index 1 ~ N) */}
                        {/*{currentKeys.map((_, index) => renderQuestionSlide(index))}
                        */}
                        {currentKeys.length === 0 ?(
                            <>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            </>
                        ):(currentKeys.map((_, index) => renderQuestionSlide(index)))
                        }
                        {/* 최종 결과 슬라이드 (마지막 인덱스) */}
                        {/*{renderResultSlide()}*/}
                        

                    </Swiper>

                </div>
            </section>  
    );
}
export default Taste;          