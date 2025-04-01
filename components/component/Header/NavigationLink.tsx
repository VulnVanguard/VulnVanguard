"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, MouseEvent, memo, useMemo, useContext } from "react";
import { UrlObject } from "url";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";
import { LenisContext } from "@/providers/LenisProvider"; 

interface NavigationLinkProps
  extends Omit<ComponentProps<typeof Link>, "href"> {
  disableHover?: boolean;
  disableExitAnimation?: boolean;
  href: string | UrlObject;
}

const NavigationLink = memo(function NavigationLink({
  href,
  children,
  target,
  className,
  disableHover = false,
  disableExitAnimation = false,
  onClick,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const ref = useHoverAnimation<HTMLAnchorElement>();
  const lenis = useContext(LenisContext); 

  const dataHoverProps = useMemo(
    () =>
      !disableHover && typeof children === "string"
        ? { "data-hover": children }
        : {},
    [disableHover, children]
  );

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const hrefString = typeof href === 'string' ? href : href.toString();
    const [hrefPath, hash] = hrefString.split("#");
    
    if (onClick) {
      onClick(e);
    }

    if (!disableExitAnimation && hrefPath && hrefPath !== pathname) {
      e.preventDefault();
    }

    if ((!hrefPath || hrefPath === pathname) && hrefString.includes("#")) {
      const target = hash && hash !== "#" ? `#${hash}` : 0;
      lenis?.scrollTo(target, { duration: 2 });
    }
  };

  return (
    <Link
      href={href}
      className={className}
      target={target}
      {...(!target && { onClick: handleClick })}
      ref={ref}
      {...dataHoverProps}
    >
      {children}
    </Link>
  );
});

export default NavigationLink;