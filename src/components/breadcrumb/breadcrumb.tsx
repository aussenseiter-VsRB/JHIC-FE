import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`mb-4 flex items-center gap-2 text-sm font-medium tracking-wide ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-white/30 text-[10px]">›</span>}
          {item.to ? (
            <Link to={item.to} className="text-white/50 hover:text-white transition-colors duration-200">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/80">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
