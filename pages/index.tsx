import Image from "next/image";
import HERO from "@/public/assets/images/svgs/hero.svg";
import Card from "@/components/common/Card";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  return (
    <main className="w-full px-5">
      <div className="w-full h-[400px] lg:h-[500px] aspect-square mb-3 md:mb-4 overflow-hidden rounded-lg">
        <Image
          src={HERO}
          alt="hero image"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <Card
            price={property.price}
            address={property.address}
            rating={property.rating}
            image={property.image}
            name={property.name}
            category={property.category}
            offers={property.offers}
            discount={property.discount}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
