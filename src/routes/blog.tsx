import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  staticData: { sitemap: true },
  component: () => <Outlet />,
});
