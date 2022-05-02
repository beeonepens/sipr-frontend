interface Props {
  menu: {
    label: string;
    icon: JSX.Element;
  };
}

export default function MiniSidebarMenu({ menu }: Props) {
  return (
    <button
      type="button"
      className="hover:bg-primary-50 dark:hover:bg-primary-700 flex flex-row items-center justify-start gap-2 rounded-md bg-transparent px-3.5 py-2 text-sm font-medium"
    >
      {menu.icon} {menu.label}
    </button>
  );
}
