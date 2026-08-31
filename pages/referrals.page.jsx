import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Referrals'), { ssr: false });

export default Page;
