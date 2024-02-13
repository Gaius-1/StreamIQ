import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Button variant="default" size="sm">
      <Mail className="mr-2 h-4 w-4"/>Submit Mail
    </Button>
  );
}
