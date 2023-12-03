import Link from 'next/link';
import { useRouter } from 'next/router';


import s from '~/styles/triangle.module.css'

export function MenuButton() {
  const router = useRouter();

  console.log(router);
  return (
  <Link href="/menu"  className={`${s.container as string}`} >
      <span data-active={false} className="inline-flex bg-white z-10 w-[2px] h-[20px] rounded-md data-[active=true]:rotate-45 data-[active=true]:translate-x-[5px] transition-all ease " />
      <span data-active={false} className="inline-flex bg-white z-10 w-[2px] h-[20px] rounded-md data-[active=true]:-rotate-45 data-[active=true]:-translate-x-[5px] transition-all ease" />
      <div className={`w-0 h-0 z-0 ${s.triangle as string} flex items-center justify-center`} /> 
    </Link>) 
}


