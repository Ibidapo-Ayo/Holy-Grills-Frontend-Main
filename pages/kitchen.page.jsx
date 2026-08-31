import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Kitchen'), { ssr: false });

export default Page;
