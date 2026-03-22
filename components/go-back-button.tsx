"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function GoBackButton() {
  return (
    <Button
      onClick={() => window.history.back()}
      variant="outline"
      size="lg"
      className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Go Back
    </Button>
  )
}
