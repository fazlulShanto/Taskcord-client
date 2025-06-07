import { MultiSelect } from '@/components/extended-ui/MultiSelect';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { FC, useState } from 'react';
interface PlaygroundProps {}
const OPTIONS = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
];
export const PlayGround: FC<PlaygroundProps> = () => {
  const [allOptions, setAllOptions] = useState<typeof OPTIONS>(OPTIONS);
  const [selectedOptions, setSelectedOptions] = useState<typeof OPTIONS>([]);
  const renderSelectedOptions = (option: (typeof OPTIONS)[number][] | undefined) => {
    if (!option) {
      return <Button>Select Menu</Button>;
    }
    if (option.length === 0) {
      return <Button>Select Menu</Button>;
    }
    return (
      <div className="flex max-w-80 flex-wrap gap-2 rounded-md border p-1">
        {option.map((option) => (
          <Badge key={option.value} className="flex items-center gap-2">
            {option.label}
            <X
              onClick={(e) => {
                e.stopPropagation();
                setSelectedOptions(selectedOptions.filter((o) => o.value !== option.value));
              }}
              className="h-4 w-4 hover:text-red-500"
            />
          </Badge>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 p-8">
      <MultiSelect
        options={allOptions}
        renderOption={(option, isSelected) => (
          <div className={cn(isSelected && 'rounded-md bg-blue-500 p-1')}>{option.label}</div>
        )}
        selectedOptions={selectedOptions}
        onApplyFilter={(selectedOptions) => {
          setSelectedOptions(selectedOptions);
        }}
        onClearFilter={() => {
          setSelectedOptions([]);
        }}
        onCreateOption={(query) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              setAllOptions([...allOptions, { label: query, value: query }]);
              setSelectedOptions([...selectedOptions, { label: query, value: query }]);
              return resolve({ label: query, value: query });
            }, 1 * 1000);
          });
        }}
        getOptionValue={(option) => option.value}
        renderTrigger={(selectedOptions) => renderSelectedOptions(selectedOptions)}
      />
    </div>
  );
};
