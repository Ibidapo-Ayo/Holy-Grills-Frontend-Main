import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/TermsPrivacy'), { ssr: false });

export default Page;
