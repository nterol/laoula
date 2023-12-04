import { useRouter } from 'next/router';

import { Cross } from '../icons/cross';

export function PageTemplate({
  color = 'white',
  children,
}: {
  color: 'red' | 'white' | 'grey';
  children: React.ReactNode;
}) {
  const { back } = useRouter();

  return (
    <div data-page-color={color}>
      <header className="flex h-32 w-full items-center justify-center">
        <button onClick={back}>
          <span className={`w-6 aspect-square ${color === 'red' ? 'text-cherry' : 'text-white'}`}>
            <Cross />
          </span>
        </button>
      </header>
      {children}
    </div>
  );
}
