import { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-open-authkit",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-open-authkit.ts",
        type: "registry:hook",
      },
    ],
  },
];
