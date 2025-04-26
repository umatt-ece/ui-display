import { Card, CardContent } from "./ui/card";
import type { LucideIcon } from "lucide-react";

export function AppSidebarCard({
  icon: Icon,
  text,
}: {
  icon?: LucideIcon;
  text?: string;
}) {
  return (
    <Card className="hover:bg-muted/50">
      <CardContent className="flex items-center gap-2">
        {Icon && <Icon size={50} className="text-muted-foreground" />}
        <span>{text}</span>
      </CardContent>
    </Card>
  );
}
