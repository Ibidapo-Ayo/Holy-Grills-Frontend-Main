import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/OurStory'), { ssr: false });

export default Page;
