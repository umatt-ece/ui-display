import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cpu, Droplet, Thermometer } from "lucide-react";

type StatusIndicatorProps = {
  label: string;
  value: number;
  colorClass: string;
};

const StatusIndicator = ({ label, value, colorClass }: StatusIndicatorProps) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-medium">{label}</span>
      <span className="text-sm">{value}%</span>
    </div>
    <Progress value={value} className={`h-3 ${colorClass}`}>
      {colorClass.includes("red") || colorClass.includes("blue") ? (
        <div className={`!bg-${colorClass.split("-")[0]}-500`} />
      ) : null}
    </Progress>
  </div>
);

export default function Home() {
  return (
    <div className="flex-1 p-6 grid grid-cols-12 gap-6">
      <Card className="col-span-12 md:col-span-3">
        <CardContent className="flex justify-around items-center py-6">
          <Thermometer className="w-8 h-8 text-green-600" />
          <Droplet className="w-8 h-8 text-red-500" />
          <Cpu className="w-8 h-8 text-gray-800" />
        </CardContent>
      </Card>

      <Card className="col-span-12 md:col-span-6 flex items-center justify-center">
        <CardContent>
          <svg width="220" height="120" className="overflow-visible">
            {/* semicircle arc */}
            <path
              d="M10,110 A100,100 0 0,1 210,110"
              fill="none"
              stroke="#000"
              strokeWidth="6"
            />
            {/* RPM label */}
            <text
              x="110"
              y="85"
              textAnchor="middle"
              fontSize="18"
              fontWeight="500"
            >
              RPM
            </text>
          </svg>
        </CardContent>
      </Card>

      <div className="col-span-12 md:col-span-3 space-y-6">
        <StatusIndicator
          label="OIL TEMP"
          value={45}
          colorClass="bg-green-100 dark:bg-green-900"
        />
        <StatusIndicator
          label="ENGINE TEMP"
          value={32}
          colorClass="bg-blue-100 dark:bg-blue-900"
        />
        <StatusIndicator
          label="OIL PRESSURE"
          value={88}
          colorClass="bg-red-100 dark:bg-red-900"
        />
      </div>
    </div>
  );
}
