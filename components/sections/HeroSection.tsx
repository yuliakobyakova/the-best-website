import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { repositoryUrl } from "@/data/content";

export function HeroSection() {
  return (
    <Section className="pb-20 pt-14 sm:pb-24 sm:pt-20">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-line bg-white/85 p-8 shadow-soft backdrop-blur sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">Кейс-лендинг</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              От идеи до продакшена
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Я реализовала этот проект с нуля: от идеи до деплоя на виртуальной машине с HTTPS.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              Этот сайт не просто страница, а результат полного процесса разработки: планирование, код, git,
              деплой и запуск на реальном сервере.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#timeline">Посмотреть процесс</Button>
              <Button href={repositoryUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                Репозиторий
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
