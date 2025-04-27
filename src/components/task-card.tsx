import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface TaskCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onToggle"> {
  taskName: string;
  done: boolean;
  onToggle?: (checked: boolean) => void;
}

export function TaskCard({
  taskName,
  done,
  onToggle,
  className,
  ...props
}: TaskCardProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>{taskName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Checkbox
            id={`task-${taskName}`}
            checked={done}
            onCheckedChange={onToggle}
          />
          <label
            htmlFor={`task-${taskName}`}
            className={cn("text-sm", "text-muted-foreground")}
          >
            {done ? "Completed" : "Pending"}
          </label>
        </div>
      </CardContent>
    </Card>
  );
}
