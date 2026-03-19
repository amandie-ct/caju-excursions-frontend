import Button from './Button';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 flex w-full border-b border-gray-400 bg-white px-2 py-2 backdrop-blur-lg">
      <section className="flex w-6xl items-center justify-between mx-auto">
        <div className="flex items-center hover:bg-gray-100 px-2 group">
          <img
            src="/assets/caju.png"
            alt="caju"
            width="70"
            className="group-hover:rotate-20 transition duration-300 ease-in-out"
          />
          <div>
            <p className="font-kavoon text-xl">Caju</p>
            <p className="font-kavoon text-xl -mt-2">excursions</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6">
          <h1 className="px-2 py-2 hover:bg-stone-100 hover:cursor-pointer font-bold">
            Events
          </h1>
          <div className="flex gap-3">
            <Button text="Sign Up" color="bg-jade" />
            <Button text="Log In" color="bg-amber-500" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
