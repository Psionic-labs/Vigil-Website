import React from "react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "pill";
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
    "inline-flex items-center justify-center font-sans font-bold transition-all duration-200 focus:outline-none group";

  const variants = {
    primary: "text-white bg-[#0f172a] hover:bg-slate-800 hover:ring-2 hover:ring-brand-400/40 shadow-sm uppercase tracking-wider rounded",
    secondary: "text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 uppercase tracking-wider rounded",
    ghost: "text-slate-600 hover:text-slate-900 uppercase tracking-wider rounded",
    pill: "text-slate-900 bg-white border border-slate-900 hover:bg-[#0f172a] hover:text-white rounded-full",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-xs",
    lg: "px-9 py-4 text-xs",
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
