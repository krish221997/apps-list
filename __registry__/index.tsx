// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
  "new-york": {
    "accordion": {
      name: "accordion",
      type: "registry:ui",
      registryDependencies: undefined,
      files: ["registry/new-york/ui/accordion.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/accordion.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input": {
      name: "input",
      type: "registry:ui",
      registryDependencies: undefined,
      files: ["registry/new-york/ui/input.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/input.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card": {
      name: "card",
      type: "registry:ui",
      registryDependencies: undefined,
      files: ["registry/new-york/ui/card.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "accordion-demo": {
      name: "accordion-demo",
      type: "registry:example",
      registryDependencies: ["accordion"],
      files: ["registry/new-york/example/accordion-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/accordion-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "login-01": {
      name: "login-01",
      type: "registry:block",
      registryDependencies: ["button","card","input","label"],
      files: ["registry/new-york/block/login-01/page.tsx","registry/new-york/block/login-01/components/login-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/login-01/page.tsx")),
      source: "__registry__/new-york/block/login-01/page.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-01": {
      name: "authentication-01",
      type: "registry:block",
      registryDependencies: ["button","card","input","label"],
      files: ["registry/new-york/block/authentication-01.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/authentication-01.tsx")),
      source: "__registry__/new-york/block/authentication-01.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "apps-list-01": {
      name: "apps-list-01",
      type: "registry:block",
      registryDependencies: ["card","input"],
      files: ["registry/new-york/block/apps-list-01.tsx","registry/new-york/hooks/use-open-authkit.ts"],
      component: React.lazy(() => import("@/registry/new-york/block/apps-list-01.tsx")),
      source: "__registry__/new-york/block/apps-list-01.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "utils": {
      name: "utils",
      type: "registry:lib",
      registryDependencies: undefined,
      files: ["registry/new-york/lib/utils.ts"],
      component: React.lazy(() => import("@/registry/new-york/lib/utils.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-mobile": {
      name: "use-mobile",
      type: "registry:hook",
      registryDependencies: undefined,
      files: ["registry/new-york/hooks/use-mobile.tsx"],
      component: React.lazy(() => import("@/registry/new-york/hooks/use-mobile.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-open-authkit": {
      name: "use-open-authkit",
      type: "registry:hook",
      registryDependencies: undefined,
      files: ["registry/new-york/hooks/use-open-authkit.ts"],
      component: React.lazy(() => import("@/registry/new-york/hooks/use-open-authkit.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
  },  "default": {
    "accordion": {
      name: "accordion",
      type: "registry:ui",
      registryDependencies: undefined,
      files: ["registry/default/ui/accordion.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/accordion.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input": {
      name: "input",
      type: "registry:ui",
      registryDependencies: undefined,
      files: ["registry/default/ui/input.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/input.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card": {
      name: "card",
      type: "registry:ui",
      registryDependencies: undefined,
      files: ["registry/default/ui/card.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "accordion-demo": {
      name: "accordion-demo",
      type: "registry:example",
      registryDependencies: ["accordion"],
      files: ["registry/default/example/accordion-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/accordion-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "login-01": {
      name: "login-01",
      type: "registry:block",
      registryDependencies: ["button","card","input","label"],
      files: ["registry/default/block/login-01/page.tsx","registry/default/block/login-01/components/login-form.tsx"],
      component: React.lazy(() => import("@/registry/default/block/login-01/page.tsx")),
      source: "__registry__/default/block/login-01/page.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-01": {
      name: "authentication-01",
      type: "registry:block",
      registryDependencies: ["button","card","input","label"],
      files: ["registry/default/block/authentication-01.tsx"],
      component: React.lazy(() => import("@/registry/default/block/authentication-01.tsx")),
      source: "__registry__/default/block/authentication-01.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "apps-list-01": {
      name: "apps-list-01",
      type: "registry:block",
      registryDependencies: ["card","input"],
      files: ["registry/default/block/apps-list-01.tsx","registry/default/hooks/use-open-authkit.ts"],
      component: React.lazy(() => import("@/registry/default/block/apps-list-01.tsx")),
      source: "__registry__/default/block/apps-list-01.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "utils": {
      name: "utils",
      type: "registry:lib",
      registryDependencies: undefined,
      files: ["registry/default/lib/utils.ts"],
      component: React.lazy(() => import("@/registry/default/lib/utils.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-mobile": {
      name: "use-mobile",
      type: "registry:hook",
      registryDependencies: undefined,
      files: ["registry/default/hooks/use-mobile.tsx"],
      component: React.lazy(() => import("@/registry/default/hooks/use-mobile.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-open-authkit": {
      name: "use-open-authkit",
      type: "registry:hook",
      registryDependencies: undefined,
      files: ["registry/default/hooks/use-open-authkit.ts"],
      component: React.lazy(() => import("@/registry/default/hooks/use-open-authkit.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
  },
}
