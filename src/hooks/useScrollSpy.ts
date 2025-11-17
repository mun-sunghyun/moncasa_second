// src/hooks/useScrollSpy.ts

import { useEffect, useState, useCallback } from 'react';

// 메뉴 항목 타입 정의
interface NavItem {
  label: string;
  href: string;
}

// 헤더 높이와 섹션 여유를 상수로 설정 (CSS/디자인에 맞게 조정 필요)
const HEADER_HEIGHT_OFFSET = 130; 

/**
 * 스크롤 스파이(Scroll Spy) 및 스무스 스크롤을 처리하는 훅
 * @param navItems - 내비게이션 항목 배열
 */
export const useScrollSpy = (navItems: NavItem[]) => {
  const [activeHash, setActiveHash] = useState<string>(navItems[0]?.href || '');
  
  // -------------------------
  // 1. 스무스 스크롤 및 Active 적용 (Click Handler)
  // -------------------------
  const handleSmoothScroll = useCallback((targetId: string) => {
    const targetSection = document.querySelector(targetId);
    
    if (targetSection && targetSection instanceof HTMLElement) {
      // 헤더 높이를 동적으로 가져오는 로직 (React에서는 ref를 사용하는 것이 더 일반적이지만, DOM 조작 방식을 유지)
      const headerElement = document.getElementById('hd');
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;
      
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      
      // 클릭 시 바로 Active 상태 갱신
      setActiveHash(targetId);
    }
  }, []);

  // -------------------------
  // 2. 스크롤 스파이 (Scroll Event)
  // -------------------------
  useEffect(() => {
    const sectionElements = navItems.map(item => document.querySelector(item.href)).filter(Boolean) as HTMLElement[];
    
    const handleScroll = () => {
      let current = '';
      const scrollY = window.scrollY;

      sectionElements.forEach(section => {
        // 섹션의 상단 위치 계산 (헤더 여유분 감안)
        const sectionTop = section.offsetTop - HEADER_HEIGHT_OFFSET; 
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = `#${section.id}`;
        }
      });

      if (current && current !== activeHash) {
        setActiveHash(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // 컴포넌트 마운트 시 초기 위치 설정
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems, activeHash]);

  return { activeHash, handleSmoothScroll };
};