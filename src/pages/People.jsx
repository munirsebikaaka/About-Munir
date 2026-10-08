import HeaderBar from "../components/layout/HeaderBar";
import Sidebar from "../components/layout/Sidebar";
import { useAppData } from "../context/useAppData";
import NoDataPge from "../components/NoDataPage";
import DataCounter from "../components/DataCounter";
import LoadingPage from "../components/LoadingPage";
import Error from "../components/Error";

const People = () => {
  const { users, loading, error } = useAppData();
  const people = users?.filter((person) => person.role !== "owner") || [];

  const profilePicture = () => {
    return people?.map((person) =>
      person?.name
        ?.split(" ")
        .map((name) => name.charAt(0))
        .slice(0, 2)
        .join("")
        .toUpperCase(),
    );
  };

  return (
    <div className="min-h-screen bg-canvas">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1500px]">
            <HeaderBar
              title="People"
              subtitle="Staff, assignments, and site responsibility"
            />

            <div className="mt-8">
              <Error error={error} />
              <DataCounter loading={loading} data={people} />
              {loading ? (
                <LoadingPage data={"workers"} />
              ) : people.length === 0 ? (
                <NoDataPge />
              ) : (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {people.map((person) => {
                    return (
                      <article
                        key={person.id}
                        className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card-hover">
                        <div className="p-5">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-tint-strong to-brand-tint-strong text-sm font-bold text-brand">
                              {profilePicture()}
                            </div>
                            <div className="min-w-0">
                              <h3 className="truncate text-[15px] font-bold text-text-primary">
                                {person.name}
                              </h3>
                              <p className="mt-0.5 truncate text-xs text-text-secondary">
                                {person.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default People;
