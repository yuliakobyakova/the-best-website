import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/data/content";

export function TimelineSection() {
  return (
    <Section id="timeline">
      <Container> 
        <Reveal>
          <SectionHeading title="Как я это делала" />
        </Reveal>

        <div className="relative mt-10 space-y-4">
          <div className="absolute left-[1.05rem] top-0 hidden h-full w-px bg-line sm:block" aria-hidden />

          {timeline.map((item) => (
            <Reveal key={item.step}>
              <article className="group relative rounded-xl2 border border-line bg-panel p-5 shadow-soft transition duration-300 hover:shadow-hover">
                <div className="grid grid-cols-[2.25rem_1fr] items-start gap-x-3 gap-y-2 sm:gap-x-4">
                  <span className="row-span-2 grid h-9 w-9 shrink-0 self-center place-items-center rounded-full bg-blue-50 text-sm font-semibold leading-none text-blue-700 ring-1 ring-blue-100">
                    <span className="translate-y-[0.5px]">{item.step}</span>
                  </span>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-700">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted sm:text-base">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
