import { Link } from "react-router-dom";

interface Props {
  clientName: string;
  projectId: string;
  projectName: string;
  currentStatus: string;
  projectNotes: string;
  recentActivity: string[];
}

const Status = (props: Props) => {
  const stages = [
    "INITIATION",
    "PLANNING",
    "IN PROGRESS",
    "REVIEW",
    "COMPLETION",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">

      {/* Header + Home Link */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Client Tracker</h1>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-lg font-medium mt-2 sm:mt-0"
        >
          Home
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">

          {/* Client Overview */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Client Overview</h2>

            {/* Search */}
            <input
              type="text"
              placeholder="Find another project"
              className="w-full border rounded-lg py-2 px-4 mb-6"
            />

            {/* Client Info - 2 column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

              {/* Column 1 */}
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Client Name</p>
                  <p>{props.clientName}</p>
                </div>

                <div>
                  <p className="font-semibold">Project ID</p>
                  <p>{props.projectId}</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Project Name</p>
                  <p>{props.projectName}</p>
                </div>

                <div>
                  <p className="font-semibold">Current Status</p>
                  <p>{props.currentStatus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stages Container */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-center">Project Stages</h2>

            {/* Tablet & Desktop: Horizontal Stages */}
            <div className="hidden sm:flex justify-center flex-wrap gap-4">
              {stages.map((stage, i) => (
                <button
                  key={i}
                  className={`px-6 py-3 rounded-lg border flex flex-col items-center justify-center text-sm ${
                    stage === props.currentStatus
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border mb-1 ${
                      stage === props.currentStatus
                        ? "bg-white border-white"
                        : "bg-white border-gray-500"
                    }`}
                  ></div>
                  {stage}
                </button>
              ))}
            </div>

            {/* Mobile ONLY: Vertical Timeline */}
            <div className="sm:hidden space-y-6 relative flex flex-col items-center mt-4">

              {stages.map((stage, index) => (
                <div key={index} className="relative flex items-start w-full max-w-xs">

                  {/* Line */}
                  {index !== stages.length - 1 && (
                    <div className="absolute left-2 top-5 h-full w-[2px] bg-gray-300"></div>
                  )}

                  {/* Dot */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      stage === props.currentStatus
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-400 bg-white"
                    }`}
                  ></div>

                  {/* Label */}
                  <p
                    className={`text-sm font-medium ${
                      stage === props.currentStatus
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {stage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Notes */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Project Notes</h2>

            <p className="mb-4">
              {props.projectName} is currently in the{" "}
              <b>{props.currentStatus}</b>.
            </p>

            <p className="mb-4">
              <b>Latest Update:</b> {props.projectNotes}
            </p>

            <p>
              <b>Next Steps:</b> Continue project development and prepare updates
              for client review.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-3 text-sm">
            {props.recentActivity.map((item, i) => (
              <li key={i}>
                <b>{item.split(":")[0]}:</b> {item.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Status;
