import Layout from 'components/ana/Layout';
import Hero from 'components/ana/sections/Hero';
import About from 'components/ana/sections/About';
import Services from 'components/ana/sections/Signature';
import StatsBar from 'components/ana/sections/Zodiac';
import Media from 'components/ana/sections/Gifts';
import ContactCTA from 'components/ana/sections/OrderCTA';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <StatsBar />
      <Media />
      <ContactCTA />
    </Layout>
  );
}
