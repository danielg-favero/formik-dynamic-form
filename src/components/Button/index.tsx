import { IButtonProps } from "./types";

export * from "./types";

export const Button: React.FC<IButtonProps> = ({
  children,
  isEnabled = false,
  ...props
}) => {
  return (
    <button
      className={`${
        isEnabled ? "opacity-25" : "opacity-100"
      } bg-indigo-900 hover:bg-indigo-800 flex items-center justify-center gap-2 p-4 font-semibold transition-colors w-full rounded-md text-slate-50  active:opacity-50 active:scale-95`}
      {...props}
    >
      {children}
    </button>
  );
};
