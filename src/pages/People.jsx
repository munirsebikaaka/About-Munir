import HeaderBar from "../components/layout/HeaderBar";
import Sidebar from "../components/layout/Sidebar";
import { useAppData } from "../context/useAppData";
import NoDataPge from "../components/NoDataPage";
import DataCounter from "../components/DataCounter";
import LoadingPage from "../components/LoadingPage";

const People = () => {
  const { users, loading } = useAppData();
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
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1500px]">
            <HeaderBar
              title="People"
              subtitle="Staff, assignments, and site responsibility"
            />

            <div className="mt-8">
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
                        className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
                        <div className="p-5">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E8F0FA] to-[#D7E6F8] text-sm font-bold text-[#295C9B]">
                              {profilePicture()}
                            </div>
                            <div className="min-w-0">
                              <h3 className="truncate text-[15px] font-bold text-[#102A43]">
                                {person.name}
                              </h3>
                              <p className="mt-0.5 truncate text-xs text-slate-500">
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
