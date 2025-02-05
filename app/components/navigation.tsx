import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://zh.yuazhi.cn/spircape/big.png"
                alt="icon"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="ml-3 text-lg font-semibold text-gray-900">Spircape</span>
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            <Link
              href="https://github.com/spircape-org/"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
            >
              Github
            </Link>
            <Link
              href="mailto:10010@spircape.com"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
            >
              Mail
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

