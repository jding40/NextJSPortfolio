import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import CarouselImage from "./CarouselImage";

function Slides() {
  return (
    <Carousel className="bg-primary">
      <CarouselItem>
        <CarouselImage text="First slide" />
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage text="Second slide" />
        <CarouselCaption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage text="Third slide" />
        <CarouselCaption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
}

export default Slides;
