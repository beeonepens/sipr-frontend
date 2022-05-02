import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchIcon } from '@heroicons/react/outline';
import FormControl from './Form/FormControl';

/** Schema for search forms */
export const SearchSchema = z.object({
  search: z.string().optional(),
});

export type SearchInput = z.infer<typeof SearchSchema>;

interface Props {
  placeholder?: string;
}

export default function Search({
  placeholder = 'Search by name or email',
}: Props) {
  /** hooks for forms control & submit action */
  const methods = useForm<SearchInput>({
    resolver: zodResolver(SearchSchema),
  });

  console.log({ search: methods.watch('search') });

  /** form error log */
  if (methods.formState.errors !== {}) console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FormControl
          id="search"
          placeholder={placeholder}
          type="text"
          leftIcon={
            <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          }
        />
      </form>
    </FormProvider>
  );
}
