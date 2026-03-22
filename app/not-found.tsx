import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
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
          A <strong className="text-secondary-foreground">404 error</strong> means the page
          you&apos;re looking for doesn&apos;t exist or has been moved to a different location.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            <a href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </a>
          </Button>
          <Button asChild size="lg" className="bg-primary text-foreground hover:bg-primary/90">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
