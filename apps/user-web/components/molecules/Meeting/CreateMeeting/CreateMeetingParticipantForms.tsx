import { useCallback, useState } from 'react';
import { MinusCircleIcon } from '@heroicons/react/outline';
import { LoadingIcon } from 'ui';
import Label from '@components/atoms/Form/Label';
import StatelessInput from '@components/atoms/Form/StatelessInput';
import { useParticipantStore } from '@utils/store/useCreateMeetParticipant';
import { searchPersonById } from '@utils/queries/userQuery';
import { useUserTeamQuery } from '@utils/hooks/queryHooks/useTeamQuery';
import { FormSelectStateless } from '@components/molecules/Form/FormSelectControl';

export default function CreateMeetingParticipantForms() {
  const [personInput, setPersonInput] = useState('');

  const [status, setStatus] = useState({
    perLoading: false,
    teaLoading: false,
  });

  /** get team data from server */
  const teams = useUserTeamQuery();
  /** format team data for dropdown select */
  const teamOptions = !teams.isSuccess
    ? []
    : teams.data.map((team) => ({
        value: team.id_team,
        label: team.name_team,
      }));

  const [teamInput, setTeamInput] = useState<null | typeof teamOptions[number]>(
    null
  );
  const onTeamChange = (v: typeof teamOptions[number]) => {
    setTeamInput(v);
  };

  console.log({ personInput, teamInput });

  const {
    personParticipants,
    addPersonParticipant,
    removePersonParticipant,
    teamParticipants,
    addTeamParticipant,
    removeTeamParticipant,
  } = useParticipantStore();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [personHelperMsg, setPersonHelperMsg] = useState('');
  const [teamHelperMsg, setTeamHelperMsg] = useState('');

  const addPersonHandler = useCallback(
    async (id: string) => {
      setStatus((cv) => ({ ...cv, perLoading: true }));
      setPersonHelperMsg('');

      const person = await searchPersonById(id);

      if (person.length > 0) {
        const { nip, name } = person[0];
        addPersonParticipant({ id: nip, name, team: false });
      } else {
        setPersonHelperMsg('Person not found!');
      }

      setStatus((cv) => ({ ...cv, perLoading: false }));
    },
    [addPersonParticipant]
  );

  const addTeamHandler = useCallback(
    async (team: typeof teamOptions[number]) => {
      setStatus((cv) => ({ ...cv, teaLoading: true }));
      setTeamHelperMsg('');

      const { value: tid, label: name } = team;
      addTeamParticipant({ id: tid.toString(), name, team: true });

      setStatus((cv) => ({ ...cv, teaLoading: false }));
    },
    [addTeamParticipant]
  );

  const allParticipants = [...personParticipants, ...teamParticipants];

  console.log({ personParticipants, teamParticipants });
  return (
    <>
      <div className="grid h-fit grid-cols-1 gap-3">
        {/* add individual participant */}
        <div className="flex flex-col justify-start gap-0.5 md:mb-4">
          <Label id="add-participant">Add Participant</Label>
          <div className="flex w-full flex-row items-center gap-x-3">
            <div className="flex w-5/6 flex-row items-center">
              <StatelessInput
                placeholder="Identification (NIP/NRP)"
                value={personInput}
                onChange={({ target }) => setPersonInput(target.value)}
                id="add-participant"
                type="text"
              />
            </div>
            <button
              type="button"
              onClick={() => addPersonHandler(personInput)}
              className="bg-primary-700 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 h-full w-1/6 rounded-md px-4 text-white dark:text-white"
            >
              {status.perLoading ? <LoadingIcon /> : 'Add'}
            </button>
          </div>
          {personHelperMsg !== '' && (
            <p className="mt-1 text-xs text-red-500 dark:text-red-300">
              {personHelperMsg}
            </p>
          )}
        </div>

        {/* add team participant */}
        <div className="flex flex-col justify-start gap-0.5">
          <Label id="add-team">Add Team</Label>
          <div className="flex w-full flex-row items-center gap-x-3">
            <div className="flex w-5/6 flex-col justify-center">
              <FormSelectStateless
                value={teamInput}
                onChange={onTeamChange}
                options={teamOptions}
                placeholder="Select team"
                id="add-team"
              />
            </div>
            <button
              type="button"
              onClick={() => addTeamHandler(teamInput)}
              className="bg-primary-700 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 h-full w-1/6 rounded-md px-4 text-white dark:text-white"
            >
              Add
            </button>
          </div>
          {teamHelperMsg !== '' && (
            <p className="mt-1 text-xs text-red-500 dark:text-red-300">
              {teamHelperMsg}
            </p>
          )}
        </div>
      </div>

      <div className="grid h-fit grid-cols-1 gap-3">
        <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Meeting Participants
        </p>

        {allParticipants.length === 0 ? (
          <div className="w-full rounded-lg border border-gray-300 bg-white py-6 text-center text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            No Participant
          </div>
        ) : (
          <ul className="rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            {allParticipants.map((par) => (
              <li
                className={
                  par.id !== allParticipants[allParticipants.length - 1].id
                    ? 'flex w-full flex-row items-center justify-between rounded-t-lg border-b border-gray-300 px-4 py-2 dark:border-gray-600'
                    : 'flex w-full flex-row items-center justify-between rounded-b-lg px-4 py-2'
                }
              >
                <p>
                  {par.name}
                  {par.team && (
                    <span className="text-primary-800 dark:bg-primary-800 dark:text-primary-50 bg-primary-50 ml-3 rounded-full px-2 py-0.5 text-xs">
                      team
                    </span>
                  )}
                </p>

                <MinusCircleIcon
                  role="button"
                  onClick={() => {
                    if (!par.team) removePersonParticipant(par);
                    else removeTeamParticipant(par);
                  }}
                  className="h-5 w-5 cursor-pointer text-red-600 hover:text-red-400 dark:text-red-300"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
