import { useLocation, useParams } from "@tanstack/react-router";

function LandingDashboard() {
  const location = useLocation();
  // @ts-expect-error - params is not typed
  const params = useParams(location.pathname);
  return (
    <div className="bg-zinc-100 h-full p-12">
      Landing Dashboard
      <pre className="whitespace-pre bg-white p-4 rounded">
        {JSON.stringify(location, null, 2)}
      </pre>
      <pre className="whitespace-pre">{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}

export default LandingDashboard;
