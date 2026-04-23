import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

 type ProjectCarouselProps = {
   images: string[];
 }

export const ProjectCarousel = ({images}: ProjectCarouselProps) => {

  return (
      <Carousel className="relative">
        <CarouselContent>
          {images.map((ImageSrc, index) => (
            <CarouselItem key={ImageSrc}>
              <img
                  src={ImageSrc}
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute bottom-0 left-1"/>
        <CarouselNext className="absolute bottom-0 right-1" />
      </Carousel>
  )
}
