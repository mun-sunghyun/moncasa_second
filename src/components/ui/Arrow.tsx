interface ArrowProps {
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ className = "" }) => {
  return (
    <svg
      className={`arrow_icon flex-shrink-0 ${className}`}
      viewBox="0 0 91 52"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M65.1786 0.5L60.9227 4.78596L78.9786 22.9695H0.5V29.0311H78.9781L60.9227 47.2141L65.1786 51.5L90.5 26L65.1786 0.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
