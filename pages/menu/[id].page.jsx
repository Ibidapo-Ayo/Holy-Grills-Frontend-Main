import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/ItemDetail'), { ssr: false });

export default Page;
