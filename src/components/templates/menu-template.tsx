import { MenuDashboard, MenuFirstScreen, MenuSecondScreen } from '../organisms/menu';

export function MenuTemplate() {
  return (
    <main className="w-full bg-cherry-dim tracking-widest">
      <MenuFirstScreen />
      <MenuSecondScreen />
      <MenuDashboard />
    </main>
  );
}
