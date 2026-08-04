import { Link } from "react-router";
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
        <div key={i} className="breadcrumb-item">
          {i > 0 && <div className="breadcrumb-separator">›</div>}
          {item.to ? (
            <Link to={item.to} className="breadcrumb-link">
              {item.label}
            </Link>
          ) : (
            <div className="breadcrumb-current">{item.label}</div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;
