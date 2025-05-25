import Header from '../components/Header';
import Footer from '../components/Footer';

import Welcome from '../components/welcome';
import WelcomeS2 from '../components/welcomes2';
import WelcomeS3 from '../components/welcomes3';

export default function Home() {
  return (
    <>
      <Header />
        <Welcome />
        <WelcomeS2 />
        <WelcomeS3 />
       <Footer />
    </>
  );
}