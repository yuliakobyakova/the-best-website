import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { taskPoints } from "@/data/content";

export function BriefSection() {
  return (
    <Section id="brief">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-line bg-panel p-6 shadow-soft sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            <div>
              <SectionHeading
                title="Задача"
                subtitle="Мне нужно было создать проект с нуля, использовать Codex, вести работу в git, задеплоить приложение на виртуальную машину, подключить домен и настроить HTTPS."
              />
            </div>

            <ul className="space-y-3 rounded-xl border border-line bg-slate-50 p-5 text-sm text-foreground sm:text-base">
              {taskPoints.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
