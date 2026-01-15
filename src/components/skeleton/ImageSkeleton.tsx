import { useState } from "react";

const ImageSkeleton = ({ className, src, alt }: { className?: string; src?: string; alt?: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="relative">
      <img onLoad={onLoad} className={className} src={src} alt={alt} />
      {!!isLoading && <div className="absolute skeleton w-full h-full z-10 bg-gray-300 left-0 bottom-0" />}
    </div>
  );
};

export default ImageSkeleton;
