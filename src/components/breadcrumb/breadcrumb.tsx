import { Link } from "react-router-dom";
import "./breadcrumb.css";

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
    <nav className={`breadcrumb-nav ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="breadcrumb-item">
          {i > 0 && <span className="breadcrumb-separator">›</span>}
          {item.to ? (
            <Link to={item.to} className="breadcrumb-link">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
