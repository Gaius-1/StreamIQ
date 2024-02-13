import { MonitorCheck } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button variant="default" size="sm">
        <MonitorCheck className="mr-2 h-4 w-4"/>Submit Mail
      </Button>
    </div>
  );
}
