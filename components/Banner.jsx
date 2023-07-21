import Image from "next/image";

const Banner = (props) => {
  return (
    <div className="w-full desktop:w-[960px] desktop:mx-auto">
      <div className={`banner-embla${props.id} overflow-hidden rounded-lg ${props.type != "Full_Width" && ""}`}>
        <div className="flex rounded-lg">
          <div className="flex-[0_0_100%]">
            <div className="desktop:flex desktop:justify-center px-[16px] desktop:px-0">
              <div
                className={`relative min-w-full overflow-hidden rounded-lg aspect-[1.8] h-[374px] w-[964px]`}
                // style={{ aspectRatio: 1.8, height: 200 }}
              >
                <Image
                  src={"/banner.jpg"}
                  alt={"alt"}
                  className={`object-fill`}
                  sizes="80vw"
                  priority={true}
                  placeholder="empty"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
