import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function AppsList () {

  const apps = [
    {
      name: "Shopify",
      icon: "https://assets.buildable.dev/catalog/node-templates/shopify.svg",
    },
    {
      name: "Stripe",
      icon: "https://assets.buildable.dev/catalog/node-templates/stripe.svg",
    },
    {
      name: "BigQuery",
      icon: "https://assets.buildable.dev/catalog/node-templates/bigquery.svg",
    },
    {
      name: "Salesforce",
      icon: "https://assets.buildable.dev/catalog/node-templates/salesforce.svg",
    },
    {
      name: "HubSpot",
      icon: "https://assets.buildable.dev/catalog/node-templates/hubspot.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://assets.buildable.dev/catalog/node-templates/postgresql.svg",
    },
    {
      name: "Zendesk",
      icon: "https://assets.buildable.dev/catalog/node-templates/zendesk.svg",
    },
    {
      name: "Slack",
      icon: "https://assets.buildable.dev/catalog/node-templates/slack.svg",
    },
    {
      name: "Gmail",
      icon: "https://assets.buildable.dev/catalog/node-templates/gmail.svg",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-10" placeholder="Search for more connections..." />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {apps.map((app) => (
          <Card
            key={app.name}
            className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-muted transition-colors"
          >
            <img src={app.icon} alt={app.name} className="w-12 h-12 mb-2" />
            <p className="text-sm font-medium">{app.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
