import Calendar from 'react-calendar';

export default function SmallCalendar() {
  return (
    <div>
      <Calendar value={new Date()} />
    </div>
  );
}
