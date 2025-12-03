import Button from '@/components/common/Button';
import LevelBadge from '@/components/common/LevelBadge';
import SearchInput from '@/components/common/SearchInput';
import StatusBadge from '@/components/common/StatusBadge';
import { MOCK_DATA } from '@/data/mockData';
import type { Column, User } from '@/types/dataTable';
import { Eye, FilterIcon } from 'lucide-react';
import { useMemo, useState, type FC } from 'react';
import DataTable from './DataTable';

const USER_COLUMNS: Column<User>[] = [
    { key: 'userId', title: 'User ID', cellClasses: 'font-mono' },
    { key: 'name', title: 'Name', cellClasses: 'font-semibold text-gray-800' },
    {
        key: 'level',
        title: 'Level',
        render: (user) => <LevelBadge level={user.level} />,
        cellClasses: 'flex items-center justify-start',
    },
    { key: 'diamonds', title: 'Diamonds' },
    { key: 'beans', title: 'Beans' },
    { key: 'coinSell', title: 'Coin Sell' },
    { key: 'coinBuy', title: 'Coin Buy' },
    { key: 'location', title: 'Location' },
    {
        key: 'status',
        title: 'Status',
        render: (user) => <StatusBadge status={user.status} />,
    },
    {
        key: 'action',
        title: 'Action',
        render: () => (
            <Button
                onClick={() => console.log('Action Clicked')}
                className="shadow-none!"
                aria-label="View user details"
            >
                <Eye />
            </Button>
        ),
    },
];

const DashboardData: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredData = useMemo(() => {
        if (!searchTerm) return MOCK_DATA;
        const lowerCaseSearch = searchTerm.toLowerCase();
        return MOCK_DATA.filter((user: User) =>
            user.userId.toLowerCase().includes(lowerCaseSearch) ||
            user.name.toLowerCase().includes(lowerCaseSearch)
        );
    }, [searchTerm]);

    return (
        <div className="flex justify-center items-start pt-10 font-sans">
            <div className="w-full">
                <div className="flex flex-row items-center justify-between space-y-0 space-x-7 mb-6">
                    <div className="w-full">
                        <SearchInput
                            value={searchTerm}
                            onValueChange={setSearchTerm}
                            placeholder="Search by agency ID or name"
                        />
                    </div>

                    <div className="flex items-end flex-1/5 w-full space-x-4">
                        <Button
                            className="flex items-center px-4 py-2 bg-white text-[#FF9080] text-base rounded-[30.86px] font-medium transition duration-150 shadow-none!"
                        >
                            <FilterIcon size={16} className="mr-2" />
                            Filter
                        </Button>
                        <Button
                            className="flex items-center px-4 py-2 bg-[#FF9080] text-white text-base rounded-[27.59px] font-medium transition duration-150 shadow-none!"
                        >
                            Add Agency
                        </Button>
                    </div>
                </div>

                <DataTable data={filteredData} columns={USER_COLUMNS} searchTerm={searchTerm} />

            </div>
        </div>
    );
};

export default DashboardData