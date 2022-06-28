import { NextPage } from 'next';
import { Header } from '../../src/components';

const AnalyticsPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Analytics'
        title='Know how users interact with your site'
        description="Being able to see how users engage with the content on your site allows you to work out what does and doesn't work for marketing, saving you money and increasing leads."
      />
      <main></main>
    </div>
  );
};
export default AnalyticsPage;
