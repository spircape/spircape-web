import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, ClockIcon, MailIcon, KeyIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Hello,<br />
              I'm <span className="text-blue-500">Zheary</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Student / Creator
            </p>
          </div>
          
          <div className="text-gray-600 space-y-2 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <MapPinIcon size={18} />
              <span>Shijiazhuang, China</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon size={18} />
              <span>19:01 (UTC+8)</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon size={18} />
              <span>i@zheary.com</span>
            </div>
            <div className="flex items-center gap-2">
              <KeyIcon size={18} />
              <span className="font-mono">70F9 0A67 3FB1 AB68</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Creating cutting-edge software that empowers users and pushes technological boundaries.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-pink-600">Our Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Specializing in web development, mobile apps, and cloud solutions with the latest technologies.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

