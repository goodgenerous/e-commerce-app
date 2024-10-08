/* eslint-disable react/jsx-key */
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonComponent from "./ButtonComponent";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const CardComponent = () => {
  const navigate = useNavigate();
  const { state, handleFunction } = useContext(GlobalContext);
  const { dataAPIProducts, loading, setCurrentIdProduct } = state;
  const { handleFormat } = handleFunction;
  const handleDetailsProduct = (id) => {
    setCurrentIdProduct(id);
    navigate(`/product/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        <Spinner color="warning" aria-label="Large spinner example" size="lg" />
      </div>
    );
  }

  return (
    <>
      <div>
        <div
          id="card-component"
          className="relative isolate px-3 min-h-screen lg:px-8"
        >
          <div className="mx-auto max-w-5xl py-16 sm:py-48 lg:py-16">
            <div className="text-5xl font-bold tracking-tight text-slate-100 font-raleway text-center">
              Exclusive Stuffs for you!
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-300 font-raleway text-center px-5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="mt-5">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                renderPrevButton={() => (
                  <div className="swiper-button-prev">Prev</div>
                )}
                renderNextButton={() => (
                  <div className="swiper-button-next">Next</div>
                )}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {dataAPIProducts.map((res, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="card backdrop-blur-md bg-white/20 w-72 shadow-xl">
                        <figure>
                          <img src={res.images} alt="Shoes" />
                        </figure>
                        <div className="card-body text-start text-white font-raleway">
                          <h2 className="card-title">{res.name}</h2>
                          <p className="text-white">
                            Rp. <span>{handleFormat(res.price)}</span>
                          </p>
                          <div className="flex gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-5 text-primary"
                            >
                              <path
                                fillRule="evenodd"
                                d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-normal text-base text-white">
                              Jakarta, Indonesia
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-5 text-secondary"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span className="font-normal text-base text-white">
                              5.0 | {res.qty} Tersisa
                            </span>
                          </div>
                          <div className="card-actions justify-start mt-3">
                            <a onClick={() => handleDetailsProduct(res._id)}>
                              <ButtonComponent name="white" title="Buy Now" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="swiper-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="swiper-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <ButtonComponent
                name="outline-white"
                title="Discover More"
                link=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
