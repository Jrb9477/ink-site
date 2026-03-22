"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-secondary-foreground px-6">
      <div className="max-w-2xl text-center">
        {/* Animated 404 SVG with handwriting effect */}
        <div className="mb-12">
          <svg
            viewBox="0 0 400 120"
            className="w-full max-w-md mx-auto h-auto"
            aria-label="404"
          >
            {/* Number 4 (first) */}
            <path
              d="M30 100 L30 50 L60 50 M30 70 L70 70 L70 30 L70 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary handwriting-animate"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: 300,
                animation: "draw 1.5s ease-out forwards",
              }}
            />
            
            {/* Number 0 */}
            <ellipse
              cx="155"
              cy="65"
              rx="35"
              ry="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="text-primary handwriting-animate"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: 300,
                animation: "draw 1.5s ease-out forwards 0.5s",
              }}
            />
            
            {/* Number 4 (second) */}
            <path
              d="M230 100 L230 50 L260 50 M230 70 L270 70 L270 30 L270 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary handwriting-animate"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: 300,
                animation: "draw 1.5s ease-out forwards 1s",
              }}
            />
          </svg>
        </div>

        {/* Page Title */}
        <h1 
          className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
          style={{
            animation: "fadeIn 0.5s ease-out forwards 1.5s",
          }}
        >
          Page Not Found
        </h1>

        {/* Explanation */}
        <div 
          className="space-y-4 mb-12 opacity-0"
          style={{
            animation: "fadeIn 0.5s ease-out forwards 1.8s",
          }}
        >
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            A <strong className="text-primary">404 error</strong> means the page you&apos;re looking for 
            doesn&apos;t exist or has been moved to a different location.
          </p>
          <p className="text-secondary-foreground/60">
            This might have happened because the URL was mistyped, the page was deleted, 
            or the link you followed is outdated.
          </p>
        </div>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          style={{
            animation: "fadeIn 0.5s ease-out forwards 2.1s",
          }}
        >
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

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
