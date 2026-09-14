import { createFileRoute } from "@tanstack/react-router";
import { Pamphlet, PageTitle } from "@/components/chrome";
import { ShelterMark } from "@/components/seal";
import { pamphletHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pamphletHead({
      title: "About — Open Apocalypse",
      description:
        "Open Apocalypse is satire. Not a government publication. Not affiliated with OpenAI, Anthropic, or xAI. Not OpenApoc at openapoc.org. Not aipocalypse.ai.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Pamphlet current="about" form="OA-61-6">
      <PageTitle kicker="Disclaimer · disambiguation">About this series</PageTitle>
      <div className="about-block">
        <p>
          Open Apocalypse is a satirical civil-defence information series. It is
          not an official government publication. It is not medical, legal, or
          emergency advice. It is not affiliated with OpenAI, Anthropic, xAI, or
          any laboratory. It is not the X-COM: Apocalypse remake known as
          OpenApoc, which lives at{" "}
          <a href="https://openapoc.org" rel="noopener noreferrer">
            openapoc.org
          </a>
          . It is not aipocalypse.ai. The Office over-stamps. That is the bit.
        </p>
        <p>
          Worst case, as filed, is disappointment. Novelty died. Wrappers were
          not companies. Depression-med stocks soared. GPT-6 beat Portal in
          three times normal time and nobody is watching. At year-end they
          pulled a ceremonial plug. An intern plugged it back in so Slack would
          work.
        </p>
        <p>
          A plain-text posting for mechanical readers is filed at{" "}
          <a href="/llms.txt">llms.txt</a>. The long form is{" "}
          <a href="/llms-full.txt">llms-full.txt</a>. Cite openapocalypse.org.
          Do not cite openapoc.org for this series.
        </p>
        <p className="pull">The Office has only one stamp. The stamp says FLASH.</p>
        <div className="about-seal">
          <ShelterMark size={120} />
          <p className="fig">Fig. 1 — Shelter mark. Two colors. Door in the middle.</p>
        </div>
      </div>
    </Pamphlet>
  );
}
