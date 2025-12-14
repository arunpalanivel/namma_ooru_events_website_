
import invitationImg from '../assets/products/invitation.jpg';
import photoFrameImg from '../assets/products/photoframe.jpg';
import videographyImg from '../assets/products/videography.jpg';
import albumImg from '../assets/products/album.jpg';
import BounceCards from './BounceCards';
import ScrollVelocity from './ScrollVelocity';

export const Products = () => {
  return (
    <section id="product" className="py-20 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-16 font-ibmMono tracking-wider text-center">OUR PRODUCTS</h2>

        <div className="w-full flex justify-center items-center py-10 relative">
          <BounceCards
            className="custom-bounce-cards"
            images={[photoFrameImg, videographyImg, albumImg, invitationImg, photoFrameImg]}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.8)"
            transformStyles={[
              "rotate(10deg) translate(-170px)",
              "rotate(5deg) translate(-85px)",
              "rotate(-3deg)",
              "rotate(-10deg) translate(85px)",
              "rotate(2deg) translate(170px)"
            ]}
            enableHover={true}
          />
        </div>

      </div>

      <div className="mt-16 w-full overflow-hidden">
        <ScrollVelocity
          texts={["LIVE PHOTO FRAME   VIDEOGRAPHY   ALBUM DESIGN   INNOVATION"]}
          velocity={20}
          className="text-2xl md:text-4xl font-bold font-ibmMono text-white mx-4"
        />
      </div>
    </section>
  );
};
