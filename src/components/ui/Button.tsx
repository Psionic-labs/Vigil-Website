import React from "react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type PolymorphicProps = ButtonProps | AnchorProps;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: PolymorphicProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-bold uppercase tracking-wider rounded transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "text-white bg-[#0f172a] hover:bg-slate-800 hover:ring-2 hover:ring-brand-400/40 shadow-sm",
    secondary: "text-slate-700 bg-white border border-slate-200 hover:bg-slate-50",
    ghost: "text-slate-600 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-xs",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as AnchorProps;
    return (
      <a href={href} className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonProps;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
