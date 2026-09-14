import { Link } from "@tanstack/react-router";
import { Pamphlet, PageTitle } from "@/components/chrome";

export function NotFoundCircular() {
  return (
    <Pamphlet current="sitrep" form="OA-61-404">
      <div className="not-found">
        <PageTitle kicker="Circular not on file">THIS CIRCULAR WAS NEVER ISSUED.</PageTitle>
        <p className="stamp stamp-ghost">ALL-CLEAR RESERVED</p>
        <p className="after-stamp">
          The Office does not invent signals. Return to the sitrep.
        </p>
        <p>
          <Link to="/">Sitrep</Link>
        </p>
      </div>
    </Pamphlet>
  );
}
