import { Fragment } from "react";
import SmartLink from "@/components/common/SmartLink";
import type { ProgramDetailVals } from "../useProgramDetail";

type Props = Pick<ProgramDetailVals, "p" | "sibs">;

export default function SiblingsSection({ p, sibs }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-10 pb-12"
      aria-labelledby="d-sib"
    >
      <h2 className="m-0 text-[17px] font-extrabold" id="d-sib">{`${p.sub} 다른 프로그램`}</h2>
      <div className="flex flex-wrap gap-2">
        {sibs.map((o, i) => (
          <Fragment key={i}>
            {o.on && (
              <span
                className="inline-flex min-h-11 items-center rounded-full bg-[#1F1F1F] px-4 py-0 text-[14px] font-bold text-white"
                aria-current="page"
              >
                {o.title}
              </span>
            )}
            {o.off && (
              <SmartLink
                className="inline-flex min-h-11 items-center gap-1 rounded-full border border-[#E4E4E4] bg-white px-4 py-0 text-[14px] font-semibold text-[#333333] no-underline"
                href={o.href}
              >{`${o.title} ›`}</SmartLink>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
