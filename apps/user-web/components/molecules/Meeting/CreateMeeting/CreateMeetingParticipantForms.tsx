import { useState } from 'react';
import { MinusCircleIcon } from '@heroicons/react/outline';
import Label from '@components/atoms/Form/Label';
import StatelessInput from '@components/atoms/Form/StatelessInput';

interface IParticipant {
  name: string;
  uid: string;
  team: string | null;
}

export default function CreateMeetingParticipantForms() {
  const defaultPar: IParticipant[] = [
    { name: 'Khoirul Asfian', uid: '213123', team: null },
    { name: 'Arya Putra', uid: '9831231', team: 'D3 IT B' },
    { name: 'Fahri Muda', uid: '8912124', team: 'D3 IT B' },
  ];
  const [participant, setParticipant] = useState<IParticipant[]>(defaultPar);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [helperText, setHelperText] = useState('');

  function removeParticipant(id: string): void {
    setParticipant((cp) => cp.filter((p) => p.uid !== id));
  }

  return (
    <>
      <div className="grid h-fit grid-cols-1 gap-3">
        {/* add individual participant */}
        <div className="flex flex-col justify-start gap-0.5 md:mb-4">
          <Label id="add-participant">Add Participant</Label>
          <StatelessInput id="add-participant" type="text" />
          {helperText !== '' && (
            <p className="text-xs text-gray-500 dark:text-gray-300">
              {helperText}
            </p>
          )}
        </div>
        {/* add team participant */}
        <div className="flex flex-col justify-start gap-0.5">
          <Label id="add-team">Add Team</Label>
          <StatelessInput id="add-team" type="text" />
          {helperText !== '' && (
            <p className="text-xs text-gray-500 dark:text-gray-300">
              {helperText}
            </p>
          )}
        </div>
      </div>

      <div className="grid h-fit grid-cols-1 gap-3">
        <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Meeting Participants
        </p>
        <ul className="rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          {participant.map((par) => (
            <li
              className={
                par.uid !== participant[participant.length - 1].uid
                  ? 'flex w-full flex-row items-center justify-between rounded-t-lg border-b border-gray-300 px-4 py-2 dark:border-gray-600'
                  : 'flex w-full flex-row items-center justify-between rounded-b-lg px-4 py-2'
              }
            >
              <p>
                {par.name}
                {par.team && (
                  <span className="text-primary-800 bg-primary-50 ml-3 rounded-full px-2 py-0.5 text-xs">
                    {par.team}
                  </span>
                )}
              </p>

              <MinusCircleIcon
                role="button"
                onClick={() => removeParticipant(par.uid)}
                className="h-5 w-5 cursor-pointer text-red-600 hover:text-red-400 dark:text-red-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
