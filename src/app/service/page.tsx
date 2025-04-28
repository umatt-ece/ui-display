import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Service {
  task: string;
  lastService: number;
  due: boolean;
}

const data: Service[] = [
  {
    task: "Right Motor Grease",
    lastService: 0,
    due: false,
  },
  {
    task: "Left Motor Grease",
    lastService: 0,
    due: false,
  },
  {
    task: "Chain Engine Oil",
    lastService: 0,
    due: true,
  },
  {
    task: "Kill the tech debt",
    lastService: 0,
    due: true,
  },
];

export default function Service() {
  return (
    <div>
      <h1 className="text-2xl font bold mb-6">Service</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Task</TableHead>
            <TableHead className="text-right">Last Service</TableHead>
            <TableHead className="text-right">Due</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((service, index) => (
            <TableRow key={index}>
              <TableCell className="w-1/2">{service.task}</TableCell>
              <TableCell className="text-right">
                {service.lastService}
              </TableCell>
              <TableCell className="text-right">
                {service.due ? (
                  <Badge className="bg-red-500 text-white">Yes</Badge>
                ) : (
                  <Badge className="bg-green-500 text-white">No</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
