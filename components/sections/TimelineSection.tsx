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
              <article className="group relative rounded-xl2 border border-line bg-panel p-5 shadow-soft transition duration-300 hover:shadow-hover sm:pl-14">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700 ring-1 ring-blue-100 sm:absolute sm:left-[0.25rem]">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-700">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted sm:text-base">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
