"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, Search, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useOpenAuthKit } from "@/hooks/use-open-authkit"

export default function AppsList() {
  const [apps, setApps] = useState<{ name: string; icon: string }[]>([]);
  const [filteredApps, setFilteredApps] = useState<
    { name: string; icon: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { trigger } = useOpenAuthKit();

  const handleOnClick = (title: string) => {
    trigger(title);
  };

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch(
          "https://api.integrationos.com/v1/public/connection-definitions?limit=100&skip=0"
        );
        const data = await response.json();

        const fetchedApps = data?.rows
          .map((app: any) => ({
            name: app.frontend.spec.title,
            icon: app.frontend.spec.image,
          }))
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
          );

        setApps(fetchedApps);
        setFilteredApps(fetchedApps);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchApps();
  }, []);

  useEffect(() => {
    const filtered = apps.filter((app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [searchTerm, apps]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          className="pl-10"
          placeholder="Search for more connections..."
          value={searchTerm}
          onChange={handleSearch}
          disabled={isLoading}
        />
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Loading apps...
          </p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
          <h2 className="mt-4 text-lg font-semibold">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We could not load the apps. Please try again later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredApps.map((app) => (
            <Card
              onClick={() => handleOnClick(app.name)}
              key={app.name}
              className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-muted transition-colors"
            >
              <img src={app.icon} alt={app.name} className="w-12 h-12 mb-2" />
              <p className="text-sm font-medium text-center">{app.name}</p>
            </Card>
          ))}
        </div>
      )}

      {!isLoading && !error && filteredApps.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg font-medium text-muted-foreground">
            No apps found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
