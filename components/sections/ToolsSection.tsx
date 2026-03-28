import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tools } from "@/data/content";

export function ToolsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading title="Что я использовала" />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Reveal key={tool.name}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{tool.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
