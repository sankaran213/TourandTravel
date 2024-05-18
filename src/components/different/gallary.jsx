import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="space-y-2 text-center">
          <h1 className="text-6xl font-bold">Our Gallery</h1>
        </div>
        <div className="container p-6 mx-auto space-y-8"></div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
