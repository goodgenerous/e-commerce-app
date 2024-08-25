const FeaturesComponents = () => {
  const dataFeatures = [
    {
      title: "Free Shipping",
      subTitle: "Order above $200",
    },
    {
      title: "Money-back",
      subTitle: "30 days guarantee",
    },
    {
      title: "Secure Payments",
      subTitle: "Secured by Stripe",
    },
    {
      title: "24/7 Support",
      subTitle: "Phone and Email Support",
    },
  ];

  return (
    <>
      <div className="flex gap-5 justify-center">
        {dataFeatures.map((res, index) => {
          return (
            <div
              key={index}
              className="px-10 py-10 backdrop-blur-md bg-white/30 w-1/5 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-20 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              <div className="text-lg text-white">{res.title}</div>
              <div className="text-md text-gray">{res.subTitle}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeaturesComponents;
