import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachItems } from "@/data/content";

export function ApproachSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title="Мой подход"
            subtitle="Я решила сделать не просто лендинг, а кейс, который показывает весь процесс разработки."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {approachItems.map((item, index) => (
            <Reveal key={item.title}>
              <Card className="h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
