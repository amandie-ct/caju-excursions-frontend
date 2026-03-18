import Button from './Button';

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 z-20 w-full backdrop-blur-lg flex py-2 px-2 items-center border-b border-gray-400 bg-white justify-between">
      <div className="flex items-center">
        <img src="/assets/caju.png" alt="caju" width="70" />
        <div>
          <p>Caju</p>
          <p>Excursions</p>
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
    </nav>
  );
};

export default Navbar;
