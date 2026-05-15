import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

 type ProjectCarouselProps = {
   images: string[];
 }

export const ProjectCarousel = ({images}: ProjectCarouselProps) => {

  return (
      <Carousel className="xl:col-span-2 overflow-clip">
        <CarouselContent>
          {images.map((ImageSrc, index) => (
            <CarouselItem key={ImageSrc}>
              <img
                  src={ImageSrc}
                  alt={`Slide ${index + 1}`}
                  className="mx-auto w-full h-8/8 object-contain"
                />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute bottom-0 left-1"/>
        <CarouselNext className="absolute bottom-0 right-1" />
      </Carousel>
  )
}
