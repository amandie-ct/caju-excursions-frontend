import type { ReactNode } from 'react';

interface IButton {
  text: string;
  handleClick?: () => void;
  color?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
}

const Button = ({
  text,
  handleClick,
  color,
  href,
  icon,
  className,
}: IButton) => {
  const buttonClassName = `inline-flex items-center gap-3 rounded-full border border-b-black px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#000] ${
    color ? color : 'bg-white'
  } ${className ? className : ''}`;

  if (href) {
    return (
      <a href={href} className={buttonClassName}>
        <span>{text}</span>
        {icon}
      </a>
    );
  }

  return (
    <button className={buttonClassName} onClick={handleClick}>
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default Button;
