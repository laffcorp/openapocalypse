import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Pamphlet, PageTitle } from "@/components/chrome";
import { INCIDENTS, type Incident } from "@/data/incidents";
import { pamphletHead } from "@/lib/seo";

export const Route = createFileRoute("/incidents")({
  head: () =>
    pamphletHead({
      title: "Incident log — Open Apocalypse",
      description:
        "OPEN incident reports IR-26-014 through IR-26-400. Sad mathematicians, honest odds, Portal fatigue, and an intern with rent.",
      path: "/incidents",
    }),
  component: IncidentsPage,
});

function flagClass(signal: Incident["signal"]) {
  if (signal === "RED") return "flag flag-red";
  if (signal === "BLACK") return "flag flag-black";
  if (signal === "WHITE") return "flag flag-white";
  if (signal === "RELEASE") return "flag flag-release";
  return "flag flag-yellow";
}

function IncidentsPage() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Pamphlet current="incidents" form="OA-61-3">
      <PageTitle kicker="Incident reports · OPEN-IR-26">
        File cards of the civilian phase
      </PageTitle>
      <p>
        Keep IR numbers stable. Casualties are vibes, never cities. ALL-CLEAR
        remains unused. 400 is reserved for The Plug.
      </p>
      {INCIDENTS.map((card) => (
        <article
          key={card.id}
          id={card.id}
          className={card.id === "ir-400" ? "file-card plug" : "file-card"}
        >
          <header className="file-head">
            <span>{card.ir}{card.title ? ` — ${card.title}` : ""}</span>
            <span className="file-meta">
              {card.date}
              <span className={flagClass(card.signal)}>{card.signal}</span>
              <span className="flag flag-white">{card.klass}</span>
            </span>
          </header>
          <div className="file-body">
            <dl>
              <dt>Official</dt>
              <dd>{card.official}</dd>
              <dt>Actual</dt>
              <dd>{card.actual}</dd>
              <dt>Casualties</dt>
              <dd>{card.casualties}</dd>
              <dt>Status</dt>
              <dd>{card.status}</dd>
            </dl>
            {card.id === "ir-400" ? <PlugDoodle /> : null}
          </div>
        </article>
      ))}
    </Pamphlet>
  );
}

function PlugDoodle() {
  return (
    <div className="plug-note">
      <svg width="72" height="56" viewBox="0 0 72 56" aria-hidden="true">
        <rect x="2" y="8" width="22" height="40" fill="#1a150f" />
        <rect x="7" y="16" width="6" height="10" fill="#e6c200" />
        <rect x="15" y="16" width="6" height="10" fill="#e6c200" />
        <rect x="36" y="18" width="18" height="20" fill="#1a150f" />
        <rect x="40" y="12" width="4" height="8" fill="#1a150f" />
        <rect x="46" y="12" width="4" height="8" fill="#1a150f" />
        <path
          d="M54 28 C62 28, 64 36, 70 38"
          fill="none"
          stroke="#1a150f"
          strokeWidth="3"
        />
      </svg>
      <p>
        Ceremonial power strip. Calendar invite: Please restore service. Intern
        with rent. Cartoon only. The Office does not issue shutdown recipes.
      </p>
      <p>
        <a href="/plug.html">Incident annex — IR-26-400 The Plug</a>
      </p>
    </div>
  );
}
