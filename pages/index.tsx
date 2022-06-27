import { NextPage } from 'next';
import { Seo } from '../src/components';

const Home: NextPage = () => {
  return (
    <main>
      <Seo
        title='Need some trees cut or your lawn mowed? Call us today!'
        description="We provide tree and lawn services in and around Adrian, MI. Whether you need your lawn mowed, a tree removed from your garage, or anything in between, we've got you covered."
        url='https://www.cocostreeservice.com'
      />
    </main>
  );
};
export default Home;
