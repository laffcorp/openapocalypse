import { createFileRoute, Link } from "@tanstack/react-router";
import { Pamphlet, PageTitle } from "@/components/chrome";
import { TIMELINE } from "@/data/incidents";
import { pamphletHead } from "@/lib/seo";

export const Route = createFileRoute("/timeline")({
  head: () =>
    pamphletHead({
      title: "Timeline — Open Apocalypse",
      description:
        "Dated spine of the Open Apocalypse, from H-Hour through IR-26-400 The Plug. Casualties were vibes. Never cities.",
      path: "/timeline",
    }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <Pamphlet current="timeline" form="OA-61-2">
      <PageTitle kicker="Preparedness series H-6 · spine">
        Timeline of the present disturbance
      </PageTitle>
      <p>
        Dates are as filed. 13 September 2026 is marked NOW. Events after NOW
        are forecast only. Forecast is not the all-clear.
      </p>
      <ol className="spine">
        {TIMELINE.map((mark) => (
          <li
            key={mark.id}
            className={
              mark.now ? "is-now" : mark.plug ? "is-plug" : mark.future ? "is-future" : undefined
            }
          >
            <span className="when">
              {mark.date}
              {mark.now ? <span className="now-tag">Now</span> : null}
              {mark.plug ? <span className="now-tag">Forecast</span> : null}
            </span>
            <p className="what">
              {mark.body}
              {mark.plug ? (
                <>
                  {" "}
                  <Link to="/incidents" hash="ir-400">
                    File OPEN-IR-26-400
                  </Link>
                  .
                </>
              ) : null}
            </p>
          </li>
        ))}
      </ol>
    </Pamphlet>
  );
}
