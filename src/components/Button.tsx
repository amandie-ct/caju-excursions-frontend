interface IButton {
  text: string;
  handleClick?: () => void;
  color?: string;
}

const Button = (props: IButton) => {
  return (
    <button
      className={`py-3 px-5 ${props.color ? props.color : 'bg-white'} font-semibold rounded-full text-sm border border-b-black hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#000]`}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
