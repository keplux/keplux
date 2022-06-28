import { NextPage } from 'next';
import { Header } from '../../src/components';

const MaintenancePage: NextPage = () => {
  return (
    <div>
      <Header
        page='Maintenance'
        title='Make sure your site is always updated to help keep your data safe'
        description='Technology advances fast, and updates are necessary to help mitigate online threats. Sometimes they are small, sometimes they are critical. We make sure your site is secure.'
      />
      <main></main>
    </div>
  );
};
export default MaintenancePage;
