import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/MarketplaceDetail'), { ssr: false });

export default Page;
