import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center bg-gradient-to-b from-white to-blue-50">
      <p className="text-sm tracking-[0.7em] text-blue-500">ERROR 404</p>
      <h1 className="text-4xl font-bold sm:text-5xl">페이지를 찾을 수 없어요</h1>
      <p className="max-w-xl text-base text-gray-600 sm:text-lg">
        요청하신 프로젝트가 없거나 주소가 변경되었을 수 있어요. URL을 다시 확인하거나
        아래 버튼을 눌러 목록으로 돌아가 주세요.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/projects"
          className="px-8 py-3 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
        >
          프로젝트 목록 보기
        </Link>
        <Link
          href="/"
          className="px-8 py-3 font-medium text-blue-600 transition-colors bg-white border border-blue-200 rounded-full hover:border-blue-400"
        >
          홈으로 이동
        </Link>
      </div>
    </div>
  )
}

