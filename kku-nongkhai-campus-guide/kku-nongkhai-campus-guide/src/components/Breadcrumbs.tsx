import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string; // omit href for the current (last) page
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  homeHref?: string;
  className?: string;
};

/**
 * Breadcrumb trail showing the visitor's current position in the site.
 * Pattern based on Tailwind UI's "Simple with chevrons" breadcrumb block:
 * https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/breadcrumbs
 */
export default function Breadcrumbs({
  items,
  homeHref = "/",
  className = "",
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol role="list" className="flex flex-wrap items-center gap-1 text-sm">
        <li className="flex items-center">
          <Link
            href={homeHref}
            className="flex items-center text-slate-400 transition hover:text-slate-600"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="sr-only">หน้าแรก</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              <ChevronRight
                className="h-4 w-4 shrink-0 text-slate-300"
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-medium text-slate-500 transition hover:text-slate-700"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-medium text-slate-800"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
