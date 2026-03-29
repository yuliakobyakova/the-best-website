import { Container } from "@/components/ui/Container";
import { repositoryUrl } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Проект выполнен как тестовое задание</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={repositoryUrl}
            className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            GitHub репозиторий
          </a>
        </div>
      </Container>
    </footer>
  );
}
