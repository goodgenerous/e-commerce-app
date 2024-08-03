import React from "react";

const ButtonPrimary = (props) => {
  return (
    <>
      <a
        href={props.link}
        className="rounded-full bg-secondary px-4 py-2 text-sm font-bold leading-6 text-black font-raleway hover:bg-secondary2"
      >
        {props.title}
      </a>
    </>
  );
};

const ButtonSecondary = (props) => {
  return (
    <>
      <a
        href={props.link}
        className="rounded-full bg-secondary px-4 py-2 text-sm font-bold leading-6 text-black font-raleway"
      >
        {props.title}
      </a>
    </>
  );
};

const ButtonWhite = (props) => {
  return (
    <>
      <a
        href={props.link}
        className="font-raleway rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.title}
      </a>
    </>
  );
};

const ButtonOutline = (props) => {
  return (
    <>
      <a
        href={props.link}
        className="rounded-full bg-secondary px-4 py-2 text-sm font-bold leading-6 text-black font-raleway"
      >
        {props.title}
      </a>
    </>
  );
};

const ButtonOutlineWhite = (props) => {
  return (
    <>
      <a
        href={props.link}
        className="font-raleway rounded-full ring-2 ring-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary hover:ring-secondary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.title}
      </a>
    </>
  );
};

const ButtonComponent = (props) => {
  if (props.name === "primary") {
    return <ButtonPrimary title={props.title} link={props.link} />;
  } else if (props.name === "secondary") {
    return <ButtonSecondary title={props.title} link={props.link} />;
  } else if (props.name === "white") {
    return <ButtonWhite title={props.title} link={props.link} />;
  } else if (props.name === "outline") {
    return <ButtonOutline title={props.title} link={props.link} />;
  } else if (props.name === "outline-white") {
    return <ButtonOutlineWhite title={props.title} link={props.link} />;
  } else {
    console.log("Tidak Ada Button");
    return null;
  }
};

export default ButtonComponent;
