interface Props {
  menu: {
    label: string;
    icon: JSX.Element;
  };
  dots?: boolean;
  onClick?: () => void;
}

export default function MiniSidebarMenu({
  menu,
  onClick,
  dots = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="hover:bg-primary-50 dark:hover:bg-primary-700 relative flex flex-row items-center justify-start gap-2 rounded-md bg-transparent px-3.5 py-2 text-sm font-medium"
    >
      {menu.icon} {menu.label}
      {dots && (
        <span className="absolute top-0 left-0 z-10 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500 dark:border-gray-900" />
      )}
    </button>
  );
}
