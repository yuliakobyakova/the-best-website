import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ResultSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-8 shadow-soft sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Результат</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Я создала лендинг с нуля, настроила git-процесс, развернула приложение на виртуальной машине и
              обеспечила доступ к нему через домен с HTTPS.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Этот проект демонстрирует полный цикл разработки: от идеи до работающего продукта.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
