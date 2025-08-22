// src/hook/useTitle.jsx
import { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(() => {
        if (typeof document === 'undefined') return           // SSR 대비(혹시 모를 환경)
        const prev = document.title                           // 이전 제목 백업
        document.title = title || prev                        // title 없으면 이전값 유지
        return () => { document.title = prev }                // 언마운트 시 복구
    }, [title])
}

export default useTitle
