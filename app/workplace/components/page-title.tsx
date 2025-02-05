"use client"

import { motion } from "framer-motion"

export function PageTitle() {
  return (
    <div className="space-y-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mx-auto"
      >
        设计启智韵
        <br />
        技术筑知库
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-1 bg-green-600 mx-auto"
      />
    </div>
  )
}

