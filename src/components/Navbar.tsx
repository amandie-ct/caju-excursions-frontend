import Button from './Button';

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 z-20 w-full backdrop-blur-lg flex py-4 px-4 items-center border border-gray-300 bg-white justify-between">
      <div>testeaqui</div>
      <div className="flex justify-between items-center gap-6">
        <h1 className="px-2 py-2 hover:bg-stone-100 hover:cursor-pointer">
          Events
        </h1>
        <div className="flex gap-3">
          <Button text="Sign Up" />
          <Button text="Log In" color="bg-amber-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
