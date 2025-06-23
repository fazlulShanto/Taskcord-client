import { AutosizeTextarea } from '@/components/extended-ui/autosize-textarea';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Form } from '@/components/ui/form';
import { Input, InputWithCounter } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const taskStatusFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Name must be at least 1 character.',
    })
    .max(160, {
      message: 'Name must not be longer than 30 characters.',
    }),
  description: z.string().optional(),
  backgroundColor: z.string().min(1, {
    message: 'Background color can not be empty',
  }),
  foregroundColor: z.string().min(1, {
    message: 'Foreground color can not be empty',
  }),
});

interface TaskStatusModalProps {
  formOperationMode?: 'create' | 'edit';
  statusFormData?: z.infer<typeof taskStatusFormSchema>;
}

export const TaskStatusModal = ({
  formOperationMode = 'create',
  statusFormData,
}: TaskStatusModalProps) => {
  const form = useForm<z.infer<typeof taskStatusFormSchema>>({
    resolver: zodResolver(taskStatusFormSchema),
    defaultValues: statusFormData ?? {
      name: '',
      description: '',
      backgroundColor: '#164b37',
      foregroundColor: '#1aeab6',
    },
  });

  const onSubmit = (data: z.infer<typeof taskStatusFormSchema>) => {
    console.log(formOperationMode, data);
    toast.success('Status created successfully');
  };

  const watchName = form.watch('name');
  const watchBackgroundColor = form.watch('backgroundColor');
  const watchForegroundColor = form.watch('foregroundColor');

  const renderPreview = () => {
    if (!watchName || !watchBackgroundColor || !watchForegroundColor) return <div></div>;
    return (
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        {/* <span className="text-sm text-muted-foreground">Preview :</span> */}
        <div
          className="h-auto w-auto rounded-2xl border border-primary px-2"
          style={{ backgroundColor: watchBackgroundColor, borderColor: watchForegroundColor }}
        >
          <span className="text-sm" style={{ color: watchForegroundColor }}>
            {watchName || 'Preview'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-7 gap-0">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Status
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">Create new status</DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-4">
          {renderPreview()}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <InputWithCounter maxLength={24} placeholder="Enter status name" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <AutosizeTextarea
                        maxHeight={220}
                        placeholder="Describe the status and its purpose."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name="backgroundColor"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Background Color</FormLabel>
                      <FormControl>
                        <Input type="color" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="foregroundColor"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Foreground Color</FormLabel>
                      <FormControl>
                        <Input type="color" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-end gap-2">
                <DialogClose asChild>
                  <Button
                    size={'sm'}
                    variant={'destructive'}
                    type="button"
                    onClick={() => {
                      form.reset();
                    }}
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button size={'sm'} type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
