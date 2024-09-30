import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

export function DataTableSkeleton() {
  const skeletonRows = Array.from({ length: 5 }, (_, index) => index); // Adjust the number of rows as needed
  const skeletonColumns = [
    "Id",
    "User",
    "Email",
    "Role",
    "Status",
    "Registered",
  ];

  return (
    <div className="md:overflow-hidden overflow-scroll">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {skeletonColumns.map((column, index) => (
                <TableHead key={index}>
                  <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {skeletonRows.map((row) => (
              <TableRow
                className="h-4 bg-gray-300 rounded w-full animate-pulse"
                key={row}
              >
                {skeletonColumns.map((_, index) => (
                  <TableCell key={index}>
                    <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="h-8 bg-gray-300 rounded w-20 animate-pulse"></div>
        <div className="h-8 bg-gray-300 rounded w-20 animate-pulse"></div>
      </div>
    </div>
  );
}
