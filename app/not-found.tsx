"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary px-6">
      <div className="max-w-xl text-center">
        {/* Clean 404 Display */}
        <h1 className="text-[10rem] md:text-[14rem] font-bold leading-none text-primary tracking-tight">
          404
        </h1>

        {/* Page Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary-foreground mt-4 mb-6">
          Page Not Found
        </h2>

        {/* Explanation */}
        <p className="text-lg text-secondary-foreground/70 leading-relaxed mb-10 max-w-md mx-auto">
          A <strong className="text-secondary-foreground">404 error</strong> means the page you're 
          looking for doesn't exist or has been moved to a different location.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="lg"
            className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
