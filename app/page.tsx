import Image from "next/image"
import { ExploreDocsButton } from "./components/ExploreDocsButton"
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      {/* Main Content */}
      <div className="pt-8 pb-10 px-4 md:px-6">
        <div className="max-w-[1350px] mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Hero Section */}
          <div className="relative w-full h-[405px]">
            <Image
              src="https://zh.yuazhi.cn/spircape/bkli.png"
              alt="bkli"
              width={2626}
              height={808}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="px-6 py-10">
            <div className="max-w-[900px] mx-auto space-y-5">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900">
                虚中有实
                <br />
                实中有虚
              </h1>
              <div className="w-20 h-1 bg-green-600" />
              <p className="text-lg text-gray-600 max-w-xl">
                Spircape灵境，这是一个个人知识库项目。知识库不仅记录个人的学习笔记、技术文档、生活感悟等内容，还试图优化生活方式，提升效率。
              </p>
              <ExploreDocsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

