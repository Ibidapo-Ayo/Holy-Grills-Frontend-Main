import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/EventDetail'), { ssr: false });

export default Page;
