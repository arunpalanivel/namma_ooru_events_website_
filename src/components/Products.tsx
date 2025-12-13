
import invitationImg from '../assets/products/invitation.jpg';
import photoFrameImg from '../assets/products/photoframe.jpg';
import videographyImg from '../assets/products/videography.jpg';
import albumImg from '../assets/products/album.jpg';
import CircularGallery from './CircularGallery';

export const Products = () => {
  const galleryItems = [
    { image: photoFrameImg, text: "PHOTO FRAME" },
    { image: videographyImg, text: "VIDEOGRAPHY" },
    { image: albumImg, text: "ALBUM DESIGN" },
    { image: invitationImg, text: "INVITATION" }
  ];

  return (
    <section id="product" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-orange mb-12 font-ibmMono">PRODUCT</h2>

        <div className="w-full h-[600px] border border-white/10 rounded-xl overflow-hidden relative">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>
      </div>
    </section>
  );
};
