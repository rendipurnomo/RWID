import { lazy, Suspense } from 'react';
import Loading from './Loading';

const HomePage = lazy(() => delayForDemo(import('../Layout/HomePages')));
const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </>
  );
};

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });
  return promise;
}

export default Home;
