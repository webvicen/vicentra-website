import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import PagesLayout from "./Layouts/PagesLayout";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <PagesLayout>
                <App {...props} />
            </PagesLayout>
        );
    },
});
