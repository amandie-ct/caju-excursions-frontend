interface IBanner {
  text: string;
}

const Banner = (props: IBanner) => {
  return (
    <section className="w-full bg-black py-2 px-2 text-white text-xs   text-center shadow-2xl">
      {props.text}
    </section>
  );
};

export default Banner;
