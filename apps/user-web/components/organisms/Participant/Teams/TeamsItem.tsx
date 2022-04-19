export default function TeamsItem({ item }: { item: number }) {
  return (
    <div className="outline-accent-400 rounded-lg bg-white py-4 px-3 outline outline-1 transition duration-75 hover:cursor-pointer hover:bg-gray-200">
      <h4 className="text-lg font-medium">Team Name</h4>
      <p className="text-sm text-gray-500">Member of class 2 D3 IT B</p>

      <p className="mt-4 text-sm text-gray-700">{3 + item} members</p>
    </div>
  );
}
