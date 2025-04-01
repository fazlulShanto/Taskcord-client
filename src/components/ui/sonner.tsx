import { X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';
import { toast as sonnerToast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

/** I recommend abstracting the toast function
 *  so that you can call it without having to use toast.custom everytime. */
export function customToast(toast: Partial<Omit<ToastProps, 'id'>>) {
  return sonnerToast.custom(
    (id) => (
      <Toast
        id={id}
        title={toast?.title || ''}
        description={toast?.description || ''}
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        button={toast?.button!}
      />
    ),
    {
      duration: toast?.duration || 3 * 1000,
      className: 'rounded',
    }
  );
}

/** A fully custom toast that still maintains the animations and interactions. */
function Toast(props: ToastProps) {
  const { title, description, button, id } = props;

  return (
    <div className="flex w-full items-center rounded bg-background p-4 shadow-lg ring-1 ring-black/5 md:max-w-[364px]">
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium text-primary">{title}</p>
          {!!description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      <div className="focus:outline-hidden ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        {button ? (
          <button
            className="rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
            onClick={() => {
              button.onClick();
              sonnerToast.dismiss(id);
            }}
          >
            {button.label}
          </button>
        ) : (
          <button
            className="rounded-full bg-red-950 p-1 text-sm font-semibold"
            onClick={() => sonnerToast.dismiss(id)}
          >
            <X className="size-4 text-red-400" />
          </button>
        )}
      </div>
    </div>
  );
}

/* example usage:
        toast({
              title: 'This is a headless toast',
              description:
                'You have full control of styles and jsx, while still having the animations.',
              button: {
                label: 'Reply',
                onClick: () => sonnerToast.dismiss(),
              },
        });

*/

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  duration?: number;
  button: {
    label: string;
    onClick: () => void;
  };
}

export { Toaster };
