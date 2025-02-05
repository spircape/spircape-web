import Image from "next/image"
import { FeatureCard } from "./components/feature-card"
import { PageTitle } from "./components/page-title"
import { Navigation } from "../components/navigation"

export default function WorkplacePage() {
  const features = [
    {
      icon: (
        <Image src="https://zh.yuazhi.cn/spircape/wpbot.png" width={48} height={48} alt="Feature icon" className="rounded-full" />
      ),
      title: "Lark",
      description:
        "知识库自动化平台，负责知识库内相关自动化连接，提供自动化资源。",
      href: "https://spircape.sg.larksuite.com/",
    },
    {
      icon: (
        <Image src="https://zh.yuazhi.cn/spircape/wpcloud.png" width={48} height={48} alt="Feature icon" className="rounded-full" />
      ),
      title: "Microsoft",
      description:
        "Microsoft 365提供office365，OneDrive，Teams等服务，为知识库提供可靠的统一认证与协助服务。",
      href: "https://my.spircape.com/",
    },
    {
      icon: (
        <Image src="https://zh.yuazhi.cn/spircape/wpdoc.png" width={48} height={48} alt="Feature icon" className="rounded-full" />
      ),
      title: "金山文档",
      description:
        "为知识库提供完善的云文档存储方案，负责知识库内主要文件的保存与编辑。",
      href: "https://www.kdocs.cn/",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 md:px-6 -mt-16">
        <div className="max-w-5xl w-full">
          <div className="space-y-12">
            <PageTitle />

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  href={feature.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

