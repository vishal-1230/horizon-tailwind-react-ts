import React from "react";
import CardMenu from "components/card/CardMenu";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";
import Card from "components/card";
import Progress from "components/progress";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FcExternal } from "react-icons/fc";
import { HiExternalLink } from "react-icons/hi";
import { MdOpenInBrowser } from "react-icons/md";
import Checkbox from "components/checkbox";

type RowObj = {
  profile_image: string;
  name: string;
  username: string;
  phone: any;
  email: string;
  images: string[];
  date: string;
  location: string;
  progress: number;
  approved?: boolean;
};

function CheckTable(props: { tableData: any, title?:string }) {
  const { tableData } = props;
  console.log("TABLE DATA", tableData)
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("profile_image", {
      id: "profileImage",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          P. IMAGE
        </p>
      ),
      cell: (info) => (
        <img src={`http://localhost:8000/get-image/${info.getValue()}`} alt="" className="rounded-full w-10 h-10 object-cover" />
      ),
    }),
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("email", {
      id: "email",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">EMAIL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("phone", {
      id: "phone",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">PHONE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("location", {
      id: "location",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">LOCATION</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("images", {
      id: "images",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          IMAGES
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-400 dark:text-white flex items-center gap-1.5 cursor-pointer">
          View Images <MdOpenInBrowser className="inline-block text-lg" />
        </p>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE APPLIED</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("username", {
      id: "username",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">USERNAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("location", {
      id: "location",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">LOCATION</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("approved", {
      id: "quantity",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          APPROVE?
        </p>
      ),
      cell: (info) => (
        <Checkbox
          defaultChecked={info.getValue()}
          colorScheme="brandScheme"
          me="10px"
          color="red"
        />
      ),
    }),
  ]; // eslint-disable-next-line
  // const [data, setData] = React.useState(() => [...defaultData]);
  const data = defaultData;
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {props.title ? props.title : "Check Table"}
        </div>

        <CardMenu />
      </header>

      <div className="mt-8 overflow-x-scroll">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default CheckTable;
const columnHelper = createColumnHelper<RowObj>();
