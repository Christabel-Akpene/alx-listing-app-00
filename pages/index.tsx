import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  return (
    <div className="px-6 lg:px-12 ">
      <div className="h-60 text-white lg:h-92 rounded-4xl overflow-hidden">
        <div className="bg-[url(/assets/background.png)] bg-no-repeat bg-center bg-cover h-full">
        <div className="flex items-center justify-center flex-col h-full px-4 text-center">
              <p className="font-semibold text-3xl md:text-5xl">
            Find your favorite place here!
          </p>
          <p className="text-center text-sm lg:text-base py-3">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          PROPERTYLISTINGSAMPLE.map(({  name,address, rating, category, price, offers, image, discount}) => {
            return (
              <Card key={name} name={name} address={address} rating={rating} category={category} price={price} offers={offers} image={image} discount={discount}/>
            )
          })
        }

      </div>
    </div>
  );
}
