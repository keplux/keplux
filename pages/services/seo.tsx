import { NextPage } from 'next';
import { Header } from '../../src/components';

const SeoPage: NextPage = () => {
  return (
    <div>
      <Header
        page='SEO and Accessibility'
        title='Rank higher on search engines while expanding access to your site'
        description='A lot of factors determine how high your site ranks on search engines. We work to understand your business and goals to help you rank higher. We also ensure your site is accessible to everyone.'
      />
      <main></main>
    </div>
  );
};
export default SeoPage;
