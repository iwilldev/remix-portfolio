import { Container } from "~/components/Container";
import homeBanner from "~/assets/images/home-banner.png";

export default function () {
  return (
    <>
      <Container
        left={(
          <div className="h-full flex flex-col lg:justify-end">
            <h3 className="text-6xl lg:text-7xl leading-tight mb-4 pb-4 text-will-500 font-bold">
              William <br /> Gonçalves
            </h3>
            <p className="text-xl font-light text-will-50 max-w-md">
              Carioca, Pai do Pedro, namorido da Laurinha, centralizador de div e flamenguista. Por aqui você pode saber mais sobre mim, o que faço e como me encontrar nas ondas da internet...
            </p>
          </div>
        )}
      />
      <img src={homeBanner} alt="William Gonçalves" className="-z-10 absolute max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-full bottom-0 right-0" />
    </>
  );
}