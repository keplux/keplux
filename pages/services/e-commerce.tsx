import { NextPage } from 'next';
import { Header } from '../../src/components';

const eCommercePage: NextPage = () => {
  return (
    <div>
      <Header
        page='E-Commerce'
        title='Need an online store for your business?'
        description='We can implement a variety of e-commerce solutions and tailor them to your needs.'
      />
      <main></main>
    </div>
  );
};
export default eCommercePage;
