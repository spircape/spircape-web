'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, ClockIcon, MailIcon, KeyIcon, Code, Send } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Hello,<br />
              I&apos;m <span className="text-blue-500">Zheary</span>
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
          <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white group">
            <CardHeader className="pb-0">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-400" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                    About me
                  </span>
                </CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent className="pt-4">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-300">Hi, I am a developer, creator, and designer. In the amateur life, I enjoy watching movies, through the warm and meaningful life.</p>
              </motion.div>
            </CardContent>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Card>

          <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white group">
            <CardHeader className="pb-0">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Send className="w-6 h-6 text-purple-400" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                    Contact
                  </span>
                </CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent className="pt-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-300">If you have any questions or need to get in touch with me, you can use the email address provided above.</p>
              </motion.div>
            </CardContent>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

