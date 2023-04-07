import { IIconButtonProps } from "./types";

export * from "./types";

export const IconButton: React.FC<IIconButtonProps> = ({
  children,
  isEnabled = false,
  ...props
}) => {
  return (
    <button
      className={`${
        isEnabled ? "opacity-25" : "opacity-100"
      } border-indigo-900 border-2 hover:bg-indigo-800 flex items-center justify-center gap-2 p-4 transition-colors rounded-md text-slate-50  active:opacity-50 active:scale-95`}
      {...props}
    >
      {children}
    </button>
  );
};
