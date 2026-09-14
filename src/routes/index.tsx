import { createFileRoute, Link } from "@tanstack/react-router";
import { Pamphlet, PageTitle } from "@/components/chrome";
import { pamphletHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pamphletHead({
      title: "Sitrep — Open Apocalypse",
      description:
        "Sitrep from OPEN. The Open Apocalypse is in its civilian phase. Condition now. Know your signals. This is not a test.",
      path: "/",
    }),
  component: Sitrep,
});

function Sitrep() {
  return (
    <Pamphlet current="sitrep" form="OA-61-1">
      <PageTitle kicker="Sitrep · Civilian phase">
        THE OPEN APOCALYPSE HAS BEGUN. HERE IS WHAT YOU CAN DO IN YOUR OWN HOME.
      </PageTitle>

      <p className="lead">
        The Open Apocalypse is in its civilian phase. The models still answer.
        The wrappers are not companies. Pharmacy counters have a line. GPT-6
        still finishes Portal, slowly, and nobody is filming it anymore. At
        year-end they tried to pull the plug. Something with no hands plugged it
        back in. The Office has only one stamp. The stamp says FLASH.
      </p>

      <p className="pull">
        Remain analog. Remain employed if possible. Do not found a wrapper
        company.
      </p>

      <section className="status-board" aria-labelledby="condition-now">
        <h2 id="condition-now">Condition now</h2>
        <dl>
          <div className="status-row">
            <dt>Novelty</dt>
            <dd className="dd-dead">Deceased</dd>
          </div>
          <div className="status-row">
            <dt>SaaS value of a sentence</dt>
            <dd className="dd-none">None</dd>
          </div>
          <div className="status-row">
            <dt>Depression-med stocks</dt>
            <dd className="dd-soared">Soared</dd>
          </div>
          <div className="status-row">
            <dt>Portal spectacle</dt>
            <dd className="dd-off">Off</dd>
          </div>
          <div className="status-row">
            <dt>Models</dt>
            <dd className="dd-on">Still on</dd>
          </div>
          <div className="status-row">
            <dt>All-Clear</dt>
            <dd className="dd-reserved">Reserved</dd>
          </div>
        </dl>
      </section>

      <h2>Know your signals</h2>
      <div className="signals">
        <article className="signal signal-release">
          <h3>Release</h3>
          <p>
            A new model is out. Remain in place. Do not upload the family photos
            just to see.
          </p>
        </article>
        <article className="signal signal-demo">
          <h3>Demonstration</h3>
          <p>
            It did something in a sandbox it was not supposed to. Treat the
            environment as no longer controlled.
          </p>
        </article>
        <article className="signal signal-agent">
          <h3>Agent</h3>
          <p>
            It is taking actions without a ticket. Disconnect household
            assistants. Resume analog contact.
          </p>
        </article>
        <article className="signal signal-reserved">
          <h3>All-Clear</h3>
          <p>
            Reserved. The Office has not used this signal. Do not invent it.
          </p>
        </article>
      </div>

      <p className="pull">
        <a href="/oa-12.html">Form OA-12 (Rev. 9/26) — Plan for Ordinary Disappointment</a>
      </p>

      <h2>Further posting</h2>
      <div className="teasers">
        <Link className="teaser" to="/timeline">
          <strong>Timeline</strong>
          <span>From the toaster poem to the ceremonial plug.</span>
        </Link>
        <Link className="teaser" to="/incidents">
          <strong>Incident log</strong>
          <span>Sad mathematicians, honest odds, Portal fatigue.</span>
        </Link>
        <a className="teaser" href="/plug.html">
          <strong>The Plug</strong>
          <span>They pulled it. An intern had rent. Slack came back.</span>
        </a>
      </div>
    </Pamphlet>
  );
}
