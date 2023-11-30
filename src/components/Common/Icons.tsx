export const Icon = ({
  svg,
  width = 24,
  height = 24,
  className,
  onClick,
  ...props
}: {
  svg: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width ? width : 20}
      height={height ? height : 20}
      {...props}
    >
      <use href={`/assets/icons_sprite.svg#${svg}`}></use>
    </svg>
  );
};
