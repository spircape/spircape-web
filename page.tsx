import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Mail, User, MessageCircle, Github } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="space-y-8">
          {/* Header and Contact Info Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Header Section */}
            <div className="space-y-2 mb-4 md:mb-0">
              <h1 className="text-4xl font-bold">
                Hello
                <br />
                Welcome to <span className="text-blue-500">Spircape</span>
              </h1>
              <p className="text-gray-600">虚中有实 实中有虚</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Github className="w-4 h-4" />
                <span>@spircape-org</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>UTC/GMT+08:00</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>10010@spircape.com</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 w-full">
            {/* About Me Card */}
            <Card className="bg-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-purple-500" />
                  <h2 className="text-xl font-semibold text-purple-500">关于项目</h2>
                </div>
                <p className="text-gray-700">
                  一个个人知识库项目，知识库不仅记录个人的学习笔记、技术文档、生活感悟等内容，还试图优化生活方式，提升效率。
                </p>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-pink-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-pink-500" />
                  <h2 className="text-xl font-semibold text-pink-500">联系</h2>
                </div>
                <p className="text-gray-700">
                  如果你有任何问题，您可以通过上方公示的 <span className="font-medium">[邮箱]</span> 联系项目负责人。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
