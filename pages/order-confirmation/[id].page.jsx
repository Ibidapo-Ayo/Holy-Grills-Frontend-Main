import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/OrderConfirmation'), { ssr: false });

export default Page;
