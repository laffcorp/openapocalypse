import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Pamphlet, PageTitle, PrintButton } from "@/components/chrome";
import { pamphletHead } from "@/lib/seo";

export const Route = createFileRoute("/refuge")({
  head: () =>
    pamphletHead({
      title: "Refuge — Open Apocalypse",
      description:
        "Inner refuge, household kit, and family plan worksheet from OPEN. Analog common sense only. Print and keep.",
      path: "/refuge",
    }),
  component: RefugePage,
});

const KIT_KEY = "oa-kit";

const KIT = [
  { id: "water", label: "Water" },
  { id: "food", label: "Canned food" },
  { id: "radio", label: "Battery radio that is not a smart speaker" },
  { id: "cash", label: "Cash" },
  { id: "phones", label: "Printed phone numbers" },
  { id: "maps", label: "Paper maps" },
  { id: "aid", label: "First aid already owned" },
  { id: "neighbors", label: "Neighbor list" },
] as const;

const DENIED = [
  "Weapons — not issued. Not this Office.",
  "Chemistry — no.",
  "Bunker plans — you have a closet.",
];

type KitMark = "off" | "have" | "no";
type KitMarks = Record<string, KitMark>;

function nextMark(mark: KitMark): KitMark {
  if (mark === "off") return "have";
  if (mark === "have") return "no";
  return "off";
}

function markLabel(mark: KitMark): string {
  if (mark === "have") return "on hand";
  if (mark === "no") return "struck";
  return "unmarked";
}

function RefugePage() {
  const [marks, setMarks] = useState<KitMarks>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KIT_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as KitMarks;
      if (parsed && typeof parsed === "object") setMarks(parsed);
    } catch {
      /* empty kit */
    }
  }, []);

  function setMark(id: string, mark: KitMark) {
    setMarks((prev) => {
      const next = { ...prev, [id]: mark };
      try {
        localStorage.setItem(KIT_KEY, JSON.stringify(next));
      } catch {
        /* private mode */
      }
      return next;
    });
  }

  return (
    <Pamphlet current="refuge" form="OA-61-5">
      <PageTitle kicker="Household posting · print and keep">
        Inner refuge, kit, and family plan
      </PageTitle>
      <PrintButton label="Print this circular" />

      <section className="refuge-block" aria-labelledby="inner-refuge">
        <h2 id="inner-refuge">Inner refuge</h2>
        <p>
          A closet or an interior room. Books as shielding. Fourteen days
          without a chatbot. A paper list of people you actually know.
        </p>
        <p>
          The present hazard is mostly summaries, empty weeks, and the urge to
          found a wrapper company. A door that closes is sufficient. Do not
          wait for a bunker circular. There is not going to be a bunker
          circular.
        </p>
      </section>

      <section className="refuge-block" aria-labelledby="household-kit">
        <h2 id="household-kit">Household kit</h2>
        <p className="kit-help">
          Tick once if on hand. Tick twice to strike. A third tick restores the
          box. Marks print with the circular.
        </p>
        <ul className="kit">
          {KIT.map((item) => {
            const mark = marks[item.id] ?? "off";
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className="kit-item"
                  data-state={mark}
                  aria-pressed={mark !== "off"}
                  aria-label={`${item.label}, ${markLabel(mark)}`}
                  onClick={() => setMark(item.id, nextMark(mark))}
                >
                  <span className="box" aria-hidden="true" />
                  <span className="kit-label">{item.label}</span>
                </button>
              </li>
            );
          })}
          {DENIED.map((label) => (
            <li className="denied" key={label}>
              <span className="box box-no" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </section>

      <section className="worksheet" aria-labelledby="family-plan">
        <h2 id="family-plan">Family plan worksheet</h2>
        <p>
          Fill in ink. Photocopy if the machine still works. A cloud copy is
          fallout.
        </p>
        <label className="field">
          <span>Name</span>
          <input className="line" type="text" autoComplete="name" />
        </label>
        <label className="field">
          <span>Name</span>
          <input className="line" type="text" />
        </label>
        <label className="field">
          <span>Name</span>
          <input className="line" type="text" />
        </label>
        <label className="field">
          <span>Analog contact</span>
          <input className="line" type="text" />
        </label>
        <label className="field">
          <span>Analog contact</span>
          <input className="line" type="text" />
        </label>
        <label className="field">
          <span>Who owns the radio</span>
          <input className="line" type="text" />
        </label>
        <label className="field">
          <span>Which neighbor still has a landline</span>
          <input className="line" type="text" />
        </label>
        <PrintButton label="Print worksheet" />
      </section>
    </Pamphlet>
  );
}
