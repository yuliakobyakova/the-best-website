import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featureList } from "@/data/content";

export function FeaturesSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading title="Что есть в проекте" />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((item) => (
            <Reveal key={item}>
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <p className="text-sm font-medium leading-7 text-foreground sm:text-base">{item}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
