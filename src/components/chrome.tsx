import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ShelterMark } from "@/components/seal";

export type NavKey =
  | "sitrep"
  | "timeline"
  | "incidents"
  | "circulars"
  | "refuge"
  | "about";

const NAV: { key: NavKey; href: string; label: string }[] = [
  { key: "sitrep", href: "/", label: "Sitrep" },
  { key: "timeline", href: "/timeline", label: "Timeline" },
  { key: "incidents", href: "/incidents", label: "Incidents" },
  { key: "circulars", href: "/circulars", label: "Circulars" },
  { key: "refuge", href: "/refuge", label: "Refuge" },
  { key: "about", href: "/about", label: "About" },
];

export function Pamphlet({
  current,
  form,
  children,
}: {
  current: NavKey;
  form: string;
  children: ReactNode;
}) {
  return (
    <div className="desk">
      <a className="skip" href="#circular-body">
        Skip to circular
      </a>
      <article className="sheet">
        <p className="ebs" aria-hidden="true">
          THIS IS A TEST OF THE EMERGENCY ALIGNMENT SYSTEM — THE TEST ALREADY
          SHIPPED.
        </p>
        <header className="masthead">
          <p className="class-line">
            UNCLASSIFIED · CIVILIAN POSTING · {form}
          </p>
          <div className="mast-row">
            <ShelterMark size={84} />
            <div className="mast-copy">
              <p className="agency-short">OPEN</p>
              <p className="agency-full">
                OFFICE OF PREPAREDNESS FOR EMERGENT NETWORKS
              </p>
              <p className="series">OPEN APOCALYPSE INFORMATION SERIES</p>
            </div>
          </div>
          <p className="date-line">13 SEPTEMBER 2026</p>
          <p className="stamp stamp-mast">THIS IS NOT A TEST.</p>
        </header>
        <div className="hazard" aria-hidden="true" />
        <nav className="nav" aria-label="Series">
          {NAV.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              aria-current={current === item.key ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hazard hazard-thin" aria-hidden="true" />
        <div id="circular-body" className="body-well">
          {children}
        </div>
        <SiteFooter />
      </article>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="hazard" aria-hidden="true" />
      <p className="office-line">Office of Preparedness for Emergent Networks</p>
      <p className="satire-note">This site is satire</p>
      <p className="closing">A blog post is not the all-clear.</p>
    </footer>
  );
}

export function PrintButton({ label = "PRINT THIS CIRCULAR" }: { label?: string }) {
  return (
    <p className="print-wrap">
      <button type="button" className="print-btn" onClick={() => window.print()}>
        {label}
      </button>
    </p>
  );
}

export function PageTitle({
  kicker,
  children,
}: {
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <header className="page-title">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1>{children}</h1>
    </header>
  );
}
