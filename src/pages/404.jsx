
import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";
import Link from 'next/link';
import Image from 'next/image';

export default function Error() {
  return (
    <Wrapper>
      <SEO pageTitle={'404 Not Found'} />
      {/* <Link href='/'>
        <Image style={{ width: "100vw", height: "vh", objectFit: "cover" }} src='../public/assets/img/404.jpg'/>
      </Link> */}
      <h1>Error...</h1>
    </Wrapper>
  )
}