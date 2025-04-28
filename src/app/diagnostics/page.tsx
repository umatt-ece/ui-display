import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Diagnostics {
  label: string;
  status: string;
  badgeClass: string;
}

const data: Diagnostics[] = [
  {
    label: "Oil Temperature",
    status: "OK",
    badgeClass: "bg-green-500 text-white",
  },
  {
    label: "Engine Temperature",
    status: "OK",
    badgeClass: "bg-green-500 text-white",
  },
  {
    label: "Seat Sensor",
    status: "FAULTED",
    badgeClass: "bg-red-600 text-white",
  },
  {
    label: "Left Sevcon Temp",
    status: "OK",
    badgeClass: "bg-green-500 text-white",
  },
  {
    label: "Right Sevcon Temp",
    status: "WARNING",
    badgeClass: "bg-yellow-500 text-black",
  },
  {
    label: "CAN-BUS 1",
    status: "OK",
    badgeClass: "bg-green-500 text-white",
  },
];

export default function Diagnostics() {
  return (
    <div>
      <h1 className="text-2xl font bold mb-6">Diagnostics</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Parameter</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.label}>
              <TableCell>{item.label}</TableCell>
              <TableCell className="text-right">
                <Badge className={item.badgeClass}>{item.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
