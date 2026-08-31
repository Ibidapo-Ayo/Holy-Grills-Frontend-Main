import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/ForgotPassword'), { ssr: false });

export default Page;
