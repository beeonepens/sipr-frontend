export default function TeamsItem({ item }: { item: number }) {
  return (
    <div className="outline-accent-400 rounded-lg bg-white py-4 px-3 outline outline-1 transition duration-75 hover:cursor-pointer hover:bg-gray-200 dark:bg-zinc-900 dark:hover:bg-zinc-800">
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
