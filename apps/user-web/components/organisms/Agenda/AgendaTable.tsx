import clsx from 'clsx';
import { memo, useMemo } from 'react';
import { Column, useGlobalFilter, useTable } from 'react-table';
import AgendaTableAction from '@components/molecules/Agenda/AgendaTableAction';
import ZeroAgenda from '@components/molecules/Agenda/ZeroAgenda';
import { formatDateWithDay, formatMeetTime } from '@utils/formatDateTime';
import { MeetWithDate } from '@utils/types/meet.dto';
import AgendaTableSearch from '@components/molecules/Agenda/AgendaTableSearch';
import AgendaTableToolbar from '@components/molecules/Agenda/AgendaTableToolbar';

interface Props {
  meets: MeetWithDate[];
  handleSelectEvent: (e: MeetWithDate) => void;
  handleDeleteEvent: (e: MeetWithDate) => void;
}

interface DataInterface {
  name: string;
  date: string;
  time: string;
  status: string;
  actions: JSX.Element;
}

function AgendaTable({ meets, handleSelectEvent, handleDeleteEvent }: Props) {
  const columns: Array<Column<DataInterface>> = useMemo(
    () => [
      {
        Header: 'Meeting name',
        accessor: 'name',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Time',
        accessor: 'time',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      meets.map((meet) => ({
        name: meet.name_meeting,
        date: formatDateWithDay(meet.start_datetime),
        time: formatMeetTime(meet.start_datetime, meet.end_datetime),
        status: meet.isOnline === 1 ? 'Online' : 'Offline',
        actions: (
          <AgendaTableAction
            event={meet}
            handleDeleteEvent={handleDeleteEvent}
            handleSelectEvent={handleSelectEvent}
          />
        ),
      })),
    [meets, handleDeleteEvent, handleSelectEvent]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter);

  if (meets.length < 1) {
    return <ZeroAgenda />;
  }
  return (
    <>
      {/* table toolbar */}
      <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
        <AgendaTableToolbar />

        <AgendaTableSearch
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <div className="relative mt-4 overflow-x-auto rounded-md border border-gray-300 shadow-md shadow-gray-300/25 dark:border-gray-700 dark:shadow-black/20 sm:rounded-lg">
        <table
          {...getTableProps()}
          className="w-full text-left text-sm text-gray-500 dark:text-gray-400"
        >
          <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            {/* Loop over the header rows */}
            {headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {/* Loop over the headers in each row */}
                {headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th
                    {...column.getHeaderProps()}
                    className={clsx(
                      'px-4 py-3',
                      column.render('Header') === 'Actions' && 'text-right'
                    )}
                  >
                    {/* Render the header */}
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {/* Loop over the table rows */}
            {rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  {...row.getRowProps()}
                  className={clsx(
                    'bg-white dark:bg-gray-800',
                    meets.length - 1 !== row.index &&
                      'border-b dark:border-gray-700'
                  )}
                >
                  {/* Loop over the rows cells */}
                  {row.cells.map((cell) => (
                    // Apply the cell props
                    <td
                      {...cell.getCellProps()}
                      className={clsx(
                        'px-4 py-3',
                        cell.column.id === 'name' &&
                          'font-medium tracking-wide text-gray-900 dark:text-gray-100'
                      )}
                    >
                      {/* Render the cell contents */}
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {rows.length < 1 && <ZeroAgenda notFound />}
      </div>
    </>
  );
}

export default memo(AgendaTable);
