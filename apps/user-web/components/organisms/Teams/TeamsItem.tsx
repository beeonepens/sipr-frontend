import type { TeamBase } from '@utils/types/team.dto';

interface Props {
  item: TeamBase;
}

export default function TeamsItem({ item }: Props) {
  return (
    <div className="rounded-lg bg-white py-4 px-3 shadow-md shadow-gray-300/25 outline outline-1 outline-gray-300 transition duration-75 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-900 dark:shadow-black/20 dark:outline-gray-600 dark:hover:bg-gray-800">
      <h4 className="text-lg font-medium">{item.name_teams}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        team description
      </p>

      <p className="mt-4 text-sm text-gray-700 dark:text-gray-200">
        (0) members
      </p>
    </div>
  );
}