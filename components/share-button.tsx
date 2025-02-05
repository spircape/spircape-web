"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export function ShareButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="text-gray-600 hover:text-gray-900"
      onClick={() => navigator.clipboard.writeText(window.location.href)}
    >
      <Share2 className="h-4 w-4 mr-2" />
      Share Article
    </Button>
  )
}

