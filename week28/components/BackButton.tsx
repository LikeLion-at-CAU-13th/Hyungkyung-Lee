'use client'

import { HTMLAttributes } from 'react'
import { useRouter } from 'next/navigation'
import { FiArrowLeftCircle } from 'react-icons/fi'

interface BackButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string
}

export default function BackButton({
  label = '프로젝트 목록으로',
  className = '',
  ...props
}: BackButtonProps) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`inline-flex items-center mb-8 text-gray-500 transition-colors hover:text-gray-900 gap-x-2 ${className}`}
      {...props}
    >
      <FiArrowLeftCircle />
      {label}
    </button>
  )
}

