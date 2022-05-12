import { preRegisterMutation } from '@utils/mutations/authMutation';
import axios from 'axios';
import { useMutation } from 'react-query';
import { Button } from 'ui';

export default function ResetPassword() {
  const mutation = useMutation(preRegisterMutation);

  const onClick = () => {
    console.log('click');

    mutation.mutate(
      { email: 'demouser@email.com' },
      {
        onError: ({ message, response }) => {
          console.log({ message, response });
        },
        /** action on mutation success */
        onSuccess: (result) => {
          console.log({ result });
        },
      }
    );
  };

  return (
    <div className="m-12 mx-auto grid grid-rows-1 items-center justify-center gap-5">
      ResetPassword
      <Button onClick={onClick}>Test Api</Button>
    </div>
  );
}
