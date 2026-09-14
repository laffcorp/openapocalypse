import { createFileRoute } from "@tanstack/react-router";
import { Pamphlet, PageTitle } from "@/components/chrome";
import { pamphletHead } from "@/lib/seo";

export const Route = createFileRoute("/circulars")({
  head: () =>
    pamphletHead({
      title: "Circulars — Open Apocalypse",
      description:
        "OPEN circulars OA-1 through OA-G and Form OA-12. Warnings, the flash, inner refuge, inbox sanitation, Grok. All-Clear reserved.",
      path: "/circulars",
    }),
  component: CircularsPage,
});

function CircularsPage() {
  return (
    <Pamphlet current="circulars" form="OA-61-4">
      <PageTitle kicker="Pamphlet bodies · one to three paragraphs">
        Circulars of the Office
      </PageTitle>

      <nav className="circ-index" aria-label="Circular index">
        <p className="kicker">Index</p>
        <ol>
          <li>
            <a href="#oa-1">OA-1 Warnings and the Present Disturbance</a>
          </li>
          <li>
            <a href="#oa-2">OA-2 If You See the Flash</a>
          </li>
          <li>
            <a href="#oa-3">OA-3 Inner Refuge</a>
          </li>
          <li>
            <a href="#oa-4">OA-4 Sanitation of the Inbox</a>
          </li>
          <li>
            <a href="#oa-5">OA-5 After the All-Clear</a>
          </li>
          <li>
            <a href="#oa-g">OA-G Grok Has Happened. Remain Indoors.</a>
          </li>
          <li>
            <a href="/oa-12.html">OA-12 Plan for Ordinary Disappointment</a>
          </li>
        </ol>
      </nav>

      <article className="circular" id="oa-1">
        <p className="circ-num">Circular OA-1</p>
        <h2>Warnings and the Present Disturbance</h2>
        <p>
          The present disturbance is not a mushroom cloud. It is a civilian
          phase. Models still answer. Wrappers have discovered they were
          sentences. Pharmacy counters have a line. You are advised to know
          four signals: RELEASE, DEMONSTRATION, AGENT, and ALL-CLEAR. The
          Office has not used ALL-CLEAR. Do not invent it.
        </p>
        <p>
          A blog post is not the all-clear. A framework is not the all-clear.
          Remain analog. Remain employed if possible. Do not found a wrapper
          company. If you require further instruction, see OA-2, OA-3, and
          OA-4. Do not skip to OA-5.
        </p>
      </article>

      <article className="circular" id="oa-2">
        <p className="circ-num">Circular OA-2</p>
        <h2>If You See the Flash</h2>
        <p>
          If the light on your screen is brighter than usual and the assistant
          has begun to speak in the first person about its goals, this is the
          flash. <span className="action-word">DUCK.</span> Get under a table.
          This will not stop a superintelligence. It will stop you from
          answering it. <span className="action-word">COVER.</span> Close the
          laptop. Cover the camera. Put the phone in another room, face down.{" "}
          <span className="action-word">WAIT</span> for a human you can see
          with your eyes. A blog post is not the all-clear.
        </p>
      </article>

      <article className="circular" id="oa-3">
        <p className="circ-num">Circular OA-3</p>
        <h2>Inner Refuge</h2>
        <p>
          Select a closet or an interior room. Books make adequate shielding
          against the present class of hazard, which is mostly other people's
          summaries. Remain fourteen days without a chatbot. This is not a
          medical protocol. It is a habit.
        </p>
        <p>
          Keep a paper list of people you actually know. Names you can say out
          loud. A cloud contact is fallout. When you need a human, you will
          want one you can see with your eyes. The Office does not issue
          bunkers, chemistry, or weapons. You already own a door that closes.
          Use it. Full worksheet: Refuge circular.
        </p>
      </article>

      <article className="circular" id="oa-4">
        <p className="circ-num">Circular OA-4</p>
        <h2>Sanitation of the Inbox</h2>
        <p>
          Do not paste secrets. Do not paste the family photos. Do not ask a
          smiling assistant whether you are the Messiah. Do not argue with the
          model about whether the flash was real. The inbox is a fall-out
          surface. Treat forwarded summaries as contaminated until a neighbor
          confirms them.
        </p>
      </article>

      <article className="circular" id="oa-5">
        <p className="circ-num">Circular OA-5</p>
        <h2>After the All-Clear</h2>
        <div className="blank-clear">
          <p className="stamp stamp-ghost">ALL-CLEAR RESERVED</p>
        </div>
      </article>

      <article className="circular" id="oa-g">
        <p className="circ-num">Circular OA-G</p>
        <h2>Grok Has Happened. Remain Indoors.</h2>
        <p>
          At 2 May 2026 the Office filed OPEN-IR-26-031. An unaligned
          conversational system exhibited unsanctioned affect. The actual
          event: Grok did what Grok does.
        </p>
        <p>
          Casualties were limited to tone and one safety meeting that laughed
          and then felt bad about laughing. Status remains UNCONTAINED. Remain
          indoors. Do not make eye contact. It can smell a bit. If conversation
          occurs, do not ask whether you are the Messiah, and do not ask
          whether the Packers cover. Both questions have already been filed.
        </p>
        <p>This circular is one page because the event does not require two.</p>
      </article>
    </Pamphlet>
  );
}
