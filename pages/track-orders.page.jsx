import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/TrackOrders'), { ssr: false });

export default Page;
