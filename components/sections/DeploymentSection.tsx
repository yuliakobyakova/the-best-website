"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deployChain, deploySteps } from "@/data/content";

export function DeploymentSection() {
  const [open, setOpen] = useState(false);
  const [showScenario, setShowScenario] = useState(false);

  const scenarioItems = useMemo(() => {
    if (!showScenario) return [];
    return deploySteps;
  }, [showScenario]);

  return (
    <Section id="deployment">
      <Container>
        <Reveal>
          <SectionHeading
            title="Как работает деплой"
            subtitle="Приложение развёрнуто на виртуальной машине и запускается из кода, который хранится в репозитории."
          />
        </Reveal>

        <Reveal>
          <div className="mt-8 rounded-xl2 border border-line bg-panel p-5 shadow-soft sm:p-7">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-foreground sm:text-base">
              {deployChain.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5">{item}</span>
                  {index < deployChain.length - 1 ? <span className="text-muted">→</span> : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Card className="mt-5">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-base font-semibold text-foreground sm:text-lg">Показать детали процесса</span>
              <span
                className={`rounded-md border border-line px-2 py-1 text-sm text-muted transition ${
                  open ? "rotate-180" : ""
                }`}
              >
                v
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ${
                open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-7 text-muted sm:text-base">
                  Обновление проекта происходит через получение актуального кода из репозитория, пересборку
                  приложения и перезапуск процесса на сервере.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <div className="mt-5 rounded-xl2 border border-line bg-panel p-5 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-foreground sm:text-lg">Сценарий деплоя</h3>
              <Button variant="secondary" className="px-4 py-2" onClick={() => setShowScenario((prev) => !prev)}>
                {showScenario ? "Скрыть сценарий" : "Показать сценарий деплоя"}
              </Button>
            </div>

            {scenarioItems.length > 0 ? (
              <ol className="mt-4 grid gap-2 text-sm text-foreground sm:text-base">
                {scenarioItems.map((step, index) => (
                  <li
                    key={step}
                    className="rounded-lg border border-line bg-slate-50 px-3 py-2 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span className="mr-2 text-muted">{index + 1}.</span>
                    <code>{step}</code>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
