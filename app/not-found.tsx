import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { GoBackButton } from "@/components/go-back-button"

export default function NotFound() {
  return (
@@ -23,23 +24,14 @@ export default function NotFound() {

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
          <GoBackButton />
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-primary/90"
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
            <Home className="h-4 w-4" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
