import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Wallet'), { ssr: false });

export default Page;
