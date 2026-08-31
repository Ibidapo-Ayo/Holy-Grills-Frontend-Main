import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Login'), { ssr: false });

export default Page;
