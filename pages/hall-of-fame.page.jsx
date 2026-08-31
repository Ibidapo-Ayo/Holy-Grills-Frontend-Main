import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/HallOfFame'), { ssr: false });

export default Page;
