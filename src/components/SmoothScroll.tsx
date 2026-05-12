'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

/**
 * SmoothScroll Component
 * 
 * Thành phần này sử dụng thư viện Lenis để tạo hiệu ứng cuộn mượt mà.
 * Nó hoạt động như một "giảm xóc" cho thanh cuộn, giúp chuyển động êm ái hơn.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      // Độ mượt (0 đến 1): số càng nhỏ càng mượt nhưng trễ hơn
      lerp: 0.08, 
      // Thời gian của hiệu ứng cuộn (giây)
      duration: 1.2,
      // Cho phép cuộn mượt bằng bánh xe chuột
      smoothWheel: true,
      // Hiệu ứng "đàn hồi" khi cuộn chạm biên
      wheelMultiplier: 1,
      infinite: false,
    }}>
      {children}
    </ReactLenis>
  )
}
