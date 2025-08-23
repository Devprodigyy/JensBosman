import Hero from './../home/Hero';
import About from './../home/About';
import Work from './../home/Work';
import Still from './../home/Still';
import Client from './../home/Client';
import Footer from './../home/Footer';

const Home = () => {
  return (
    <>
      <div className="mainfont w-full bg-black flex flex-col gap-3 px-2 pt-2 pb-5">
        <Hero />
        <About />
        <Work />
        <Still />
        <Client />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
