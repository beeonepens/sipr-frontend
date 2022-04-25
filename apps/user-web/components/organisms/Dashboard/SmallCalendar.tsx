import Calendar from 'react-calendar';

export default function SmallCalendar() {
  return (
    <div className="rounded-lg shadow-md shadow-gray-300/25 dark:shadow-black/20">
      <Calendar value={new Date()} />
    </div>
  );
}
