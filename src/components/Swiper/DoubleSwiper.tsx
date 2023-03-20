import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export function DoubleSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div>
        <ul className="tabs" style={{ display: "flex" }}>
          <li style={{ padding: "20px" }}>
            <a onClick={() => setToggle(true)}>Главные новости</a>
          </li>

          <li style={{ padding: "20px" }}>
            <a onClick={() => setToggle(false)}>Достижения</a>
          </li>
        </ul>
      </div>

      {toggle ? (
        <div>
          <Swiper
            style={{
              height: "500px",
              width: "100%",
              justifyContent: "center",
              border: "black 1px solid",
              borderRadius: "15px",
              marginTop: "10px",
            }}
            loop={false}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((e) => (
              <>
                <SwiperSlide>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "blue",
                        width: "50%",
                        alignItems: "center",
                        color: "white",
                        justifyContent: "center",
                        fontSize: "200%",
                      }}
                    >
                      <p>Slide {e}</p>
                    </div>
                    <div style={{ width: "50%", borderRadius: "15px" }}>
                      <img
                        style={{
                          objectFit: "contain",
                          borderRadius: "15px",
                          height: "100%",
                          width: "100%",
                        }}
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>

          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((e) => (
              <SwiperSlide
                style={{ height: "400px", paddingTop: "20px", width: "150px" }}
              >
                <div>
                  <img
                    style={{
                      objectFit: "cover",
                      borderRadius: "5px",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                  />
                </div>
                <h5>02.04.3004</h5>
                <h4>Text text text</h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div>
          <Swiper
            style={{
              height: "500px",
              width: "100%",
              justifyContent: "center",
              border: "black 1px solid",
              borderRadius: "15px",
              marginTop: "10px",
            }}
            loop={false}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((e) => (
              <>
                <SwiperSlide>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "green",
                        width: "50%",
                        alignItems: "center",
                        color: "white",
                        justifyContent: "center",
                        fontSize: "200%",
                      }}
                    >
                      <h1>Slide {e}</h1>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        borderRadius: "15px",
                      }}
                    >
                      <img
                        style={{ objectFit: "cover" }}
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((e) => (
              <SwiperSlide>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  <h1>Text</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
