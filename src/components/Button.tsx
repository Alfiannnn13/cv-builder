import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 dont-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400 hover:bg-lime-200 hover:border-lime-200",
      secondary: "border-whit text-white bg-transparent",
    },
    size: {
      sm:"h-10",
    }
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?:"sm"
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
    const { variant, className, size, ...otherProps} = props
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}
