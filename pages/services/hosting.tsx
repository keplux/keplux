import { NextPage } from 'next';
import { Header } from '../../src/components';

const HostingPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Hosting'
        title='Get your site online with our hosting options'
        description='Yet another area with endless options, we can ease your hosting woes so you can grow your business without added stress.'
      />
      <main></main>
    </div>
  );
};
export default HostingPage;
