import HomeCard from "@/components/home/homeCard";
import Carousel from "@/components/layouts/carousel/carousel";

export default function HomeComponent() {
  const images = [
    {
      image: "/images/img1.jpg",
    },
    {
      image: "/images/img2.jpg",
    },
    {
      image: "/images/img3.jpg",
    },
  ];
  return (
    <>
      <HomeCard />
    </>
  );
}
