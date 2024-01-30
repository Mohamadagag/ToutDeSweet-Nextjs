import Image from "next/image";
import HomepageSlider from "@/components/HomepageSlider";
import pic1 from "../public/images/pic1.png";
import pic2 from "../public/images/pic2.png";
import pic3 from "../public/images/pic3.png";
import pic4 from "../public/images/pic4.png";
import ProductsList from "@/components/ProductsHomepage";

export default function HomePage() {
  return (
    <main>
      <HomepageSlider />

      <div className="flex flex-col items-center py-10 px-3">
        <h1 className="text-[#393f46] text-base tracking-wide font-medium">
          Experience the cake and desserts artistry
        </h1>
        <p className="max-w-[110ch] pt-5 text-center text-black font-light">
          Tout de Sweet is the manifestation of a passion to create and offer
          exceptional and artisanal cakes and desserts. It's where the finest
          ingredients and lightest feelings meet and merge into beautiful
          creations of unique taste and elegant image. Every color, every smell,
          and every flavor will take you to mystifying places of belonging.
        </p>
      </div>

      <ProductsList />

      <div className="flex">
        <div className="w-1/3">
          <Image
            src={"/images/concept.png"}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-1/3">
          <Image
            src={"/images/values.png"}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-1/3">
          <Image
            src={"/images/team.png"}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center py-10 px-3">
        <h1 className="text-[#393f46] text-3xl tracking-wider font-bold">
          FIND US
        </h1>
        <p className="max-w-[110ch] pt-5 text-center text-black font-light tracking-wider">
          We are Located in Shop 14, Block 4, Wasl Square, Dubai-U.A.E.
        </p>
      </div>

      <div>
        <iframe
          className="w-full h-80"
          title="ToutDeSweet Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.534106585011!2d55.23520566523074!3d25.18520451747383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d6ee219c35%3A0x372e42ea657fd673!2sTout%20De%20Sweet!5e0!3m2!1sen!2slb!4v1674683219240!5m2!1sen!2slb"
        ></iframe>
      </div>

      <div className="px-[10px] py-[40px] bg-[#8c959a] flex justify-around flex-wrap">
        <div className="flex items-center mb-5">
          <div className="w-[90px] mr-5">
            <Image src={pic1} className="w-full h-full object-cover mr-5" />
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">
              Delivery - Cakes & Big orders
            </h4>
            <p className="text-justify max-w-[30ch] text-white font-light">
              Our signature cakes can be pre-ordered upon 2 to 3 days earlier
              notice, via either direct phone call or whatsapp message. Cakes
              and sizable orders deliver across Dubai.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <div className="w-[90px] mr-5">
            <Image src={pic2} className="w-full h-full object-cover mr-5" />
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">
              Delivery - Desserts & Bites
            </h4>
            <p className="text-justify max-w-[30ch] text-white font-light">
              Our tartes, eclairs, and other delights are available for delivery
              via delivery aggregator “Deliveroo” or for pick-up by simply
              referring directly to our shop.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <div className="w-[90px] mr-5">
            <Image src={pic3} className="w-full h-full object-cover mr-5" />
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">
              Catering events
            </h4>
            <p className="text-justify max-w-[30ch] text-white font-light">
              Tout de Sweet caters for the different types of events in Dubai
              whether weddings, birthdays and celebrations, business
              conferences, or others.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <div className="w-[90px] mr-5">
            <Image src={pic4} className="w-full h-full object-cover mr-5" />
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">Hosting events</h4>
            <p className="text-justify max-w-[30ch] text-white font-light">
              We can also host small events such as high-tea gatherings, Pop-up
              exhibitions and others in our homy and cozy venue located in Al
              Wasl - Dubai.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
