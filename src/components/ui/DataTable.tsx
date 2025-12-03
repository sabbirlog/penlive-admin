import type { Column } from '@/types/dataTable';

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchTerm: string;
}

function DataTable<T extends { userId: string }>(props: Readonly<DataTableProps<T>>) {
  const { data, columns, searchTerm } = props;

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1000px] bg-[#BCC5D7BF] border border-[#FFFFFF59] rounded-[29px] py-[18px]">
        <div
          className="grid grid-cols-10 gap-x-4 px-4 py-3 text-[18px] font-medium text-[#535353] uppercase tracking-wider border-b border-[#DFDFDF] rounded-t-lg"
        >
          {columns.map((col) => (
            <div key={col.key as string} className="truncate">
              {col.title}
            </div>
          ))}
        </div>

        <div className="divide-y divide-[#DFDFDF]">
          {data.map((item, rowIndex) => (
            <div
              key={item.userId}
              className={`grid grid-cols-10 gap-x-4 px-4 py-3 text-[18px] text-[#181717] transition duration-150 ${rowIndex === data.length - 1 ? 'rounded-b-lg' : ''}`}
            >
              {columns.map((col) => (
                <div key={col.key as string} className={`flex items-center truncate ${col.cellClasses || ''}`}>
                  {col.render
                    ? col.render(item)
                    : (col.key !== 'action' && String(item[col.key]))}
                </div>
              ))}
            </div>
          ))}

          {data.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No users found matching "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataTable;