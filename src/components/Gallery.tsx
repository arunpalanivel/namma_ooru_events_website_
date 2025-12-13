import { useState } from 'react';
import { Upload, Camera, Plus } from 'lucide-react';
import img1 from '../assets/gallery/img1.png';
import img2 from '../assets/gallery/img2.png';
import img3 from '../assets/gallery/img3.png';
import img4 from '../assets/gallery/img4.png';

export const Gallery = () => {
  const [images, setImages] = useState<string[]>([
    img1, img2, img3, img4,
    img1, img2, img3, img4,
    img1, img2, img3, img4
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <section id="gallery" className="relative w-full min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-kaisei">
          Our <span className="text-brand-orange">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                className="h-auto max-w-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                src={img}
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                <Plus size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white font-kaisei mb-2">Add Your <span className="text-brand-orange">Memories</span></h3>
              <p className="text-gray-400 font-heebo">Upload photos directly to our gallery. Choose a file or take a picture!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Upload File Button */}
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="gallery-upload"
                />
                <label
                  htmlFor="gallery-upload"
                  className="flex flex-col items-center justify-center gap-3 bg-black/40 border-2 border-dashed border-white/20 hover:border-brand-orange/50 hover:bg-brand-orange/5 rounded-xl p-6 cursor-pointer transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-brand-orange/20 flex items-center justify-center text-gray-400 group-hover:text-brand-orange transition-colors">
                    <Upload size={24} />
                  </div>
                  <span className="text-gray-300 font-bold group-hover:text-white">Upload File</span>
                </label>
              </div>

              {/* Camera Button */}
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="gallery-camera"
                />
                <label
                  htmlFor="gallery-camera"
                  className="flex flex-col items-center justify-center gap-3 bg-black/40 border-2 border-dashed border-white/20 hover:border-brand-orange/50 hover:bg-brand-orange/5 rounded-xl p-6 cursor-pointer transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-brand-orange/20 flex items-center justify-center text-gray-400 group-hover:text-brand-orange transition-colors">
                    <Camera size={24} />
                  </div>
                  <span className="text-gray-300 font-bold group-hover:text-white">Take Photo</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
