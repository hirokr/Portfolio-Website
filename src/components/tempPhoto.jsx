"use client";
import Image from "next/image";

const TempPhoto = () => {
  return (
    <div className='w-full h-full relative'>
      <div>
        <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten rounded-full'>
          <Image
            src='/assets/img.png'
            alt='My'
            priority
            quality={100}
            fill
            className='object-contain rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default TempPhoto;
