import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Mail, User, MessageCircle } from 'lucide-react'

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
                Hello,
                <br />
                I'm <span className="text-blue-500">Zheary</span>
              </h1>
              <p className="text-gray-600">Student / Creator</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Beijing, China</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>UTC/GMT+08:00</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>zh@zheary.com</span>
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
                  <h2 className="text-xl font-semibold text-purple-500">About me</h2>
                </div>
                <p className="text-gray-700">
                  Hi, I am a developer, creator, and designer. In the amateur life, I enjoy watching movies, through the warm and meaningful life.
                </p>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-pink-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-pink-500" />
                  <h2 className="text-xl font-semibold text-pink-500">Contact</h2>
                </div>
                <p className="text-gray-700">
                  If you have any questions or need to get in touch with me, you can click on the <span className="font-medium">[Mail]</span> above to send an email.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
