export default function TeamsItem({ item }: { item: number }) {
  return (
    <div className="rounded-lg bg-white py-4 px-3 shadow-md shadow-gray-300/25 outline outline-1 outline-gray-300 transition duration-75 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-900 dark:shadow-black/20 dark:outline-gray-600 dark:hover:bg-gray-800">
      <h4 className="text-lg font-medium">Team Name</h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Member of class 2 D3 IT B
      </p>

      <p className="mt-4 text-sm text-gray-700 dark:text-gray-200">
        {3 + item} members
      </p>
    </div>
  );
}
