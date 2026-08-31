import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/ResetPassword'), { ssr: false });

export default Page;
