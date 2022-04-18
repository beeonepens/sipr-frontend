import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import FormControl from '../Form/FormControl';

/** Schema for search forms */
export const SearchSchema = z.object({
  search: z.string().optional(),
});

export type SearchInput = z.infer<typeof SearchSchema>;

export default function Search() {
  /** hooks for forms control & submit action */
  const methods = useForm<SearchInput>({
    resolver: zodResolver(SearchSchema),
  });

  console.log({ search: methods.watch('search') });

  /** form error log */
  if (methods.formState.errors) console.log({ f: methods.formState.errors });

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FormControl
          id="search"
          placeholder="Search by name or email"
          type="text"
        />
      </form>
    </FormProvider>
  );
}
