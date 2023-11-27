import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CustomSliderProps {
  imageUrls: string[];
}

const CustomSlider = ({ imageUrls }: CustomSliderProps) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={false}
      showStatus={false}
      showThumbs={false}
      interval={3000}
    >
      {imageUrls.map((imageUrl: string, index: number) => (
        <div key={index}>
          <img src={imageUrl} alt={`Custom Popup Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomSlider;
