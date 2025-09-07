import { type Route } from "../.react-router/types/src/+types/root";
import { i18n } from "./config/i18n";
import "../styles/index.scss";
import "virtual:uno.css";
import { I18nProvider } from "@lingui/react";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import {
  isRouteErrorResponse,
  Links,
  type LinksFunction,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

export default function Component() {
  return (
    <I18nProvider i18n={i18n}>
      <PortfolioProvider>
        <Outlet />
        {/* click to component is not supported to work with react 19 , we will wait until further update */}
        {/* <ClickToComponent /> */}
      </PortfolioProvider>
    </I18nProvider>
  );
}

export const meta: MetaFunction = () => {
  return [{ title: "FrontEnd Template" }];
};

export const links: LinksFunction = () => {
  return [
    // {
    //   rel: "stylesheet",
    //   href: "@/styles/index.scss",
    // },
    {
      href: "./favicon.ico",
      rel: "icon",
      type: "image/svg+xml",
    },
  ];
};

export function ErrorBoundary({ error }: Readonly<Route.ErrorBoundaryProps>) {
  let message = "Oops!";
  let details = "The required page is not found";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "the requested page could not be found"
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    // development error that will be shown during the development process
    details = error.message;
    stack = error.stack;
  }

  return (
    <>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </>
  );
}

export function HydrateFallback() {
  return <div className="">Loading Project...</div>;
}

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf8" />
        {/* <link rel="icon" type="image/svg+xml" href="/vite.svg" /> */}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
