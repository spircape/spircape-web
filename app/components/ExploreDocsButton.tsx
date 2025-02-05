"use client"

import { Button } from "@/components/ui/button"

export function ExploreDocsButton() {
  return (
    <Button
      variant="default"
      className="bg-green-600 hover:bg-green-700 text-white text-lg px-5 py-2 rounded-md font-semibold transition duration-150 ease-in-out"
      onClick={() => window.open("https://spircape.com/workplace", "_blank")}
    >
      Workplace
    </Button>
  )
}

