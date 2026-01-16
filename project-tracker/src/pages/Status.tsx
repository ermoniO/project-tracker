import { Link } from "react-router-dom";

interface Props {
  clientName: string;
  projectId: string;
  projectName: string;
  currentStatus: string;
  projectNotes: string;
  recentActivity: string[];
  nextSteps: string;
  currentStage: string;
}

const Status = (props: Props) => {
  const stages = [
    "INITIATION",
    "PLANNING",
    "IN PROGRESS",
    "REVIEW",
    "COMPLETION",
  ];

  const activeIndex = stages.findIndex(
  (stage) => stage === stages[stages.indexOf(props.currentStage)]
);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Project Tracker</h1>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-lg font-medium mt-2 sm:mt-0"
        >
          Home
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          {/* Client Overview */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Client Overview</h2>

            <input
              type="text"
              placeholder="Find another project"
              className="w-full border rounded-lg py-2 px-4 mb-6"
            />

            {/* Client Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Client Name</p>
                  <p>{props.clientName}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Project ID</p>
                  <p>{props.projectId}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Project Type</p>
                  <p>{props.projectName}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Current Status</p>
                  <p>{props.currentStatus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Stages */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Current Status {props.currentStatus}
            </h2>

            {/* Desktop / Tablet */}
            <div className="hidden sm:flex justify-center gap-6">
              {stages.map((stage, i) => {
                const isActive = stage === props.currentStage;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-sm text-gray-700"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center mb-1 ${
                        isActive
                          ? "bg-blue-600 border-blue-600"
                          : "bg-white border-gray-400"
                      }`}
                    >
                      {isActive && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={isActive ? "text-blue-600 font-semibold" : ""}
                    >
                      {stage}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile ONLY: Vertical Progress Timeline */}
<div className="sm:hidden space-y-6 relative mt-6">
  {stages.map((stage, index) => {
    const isActive = index === activeIndex;
    const isCompleted = index < activeIndex;

    return (
      <div key={index} className="relative flex items-start">
        {/* Progress Line */}
        {index !== stages.length - 1 && (
          <div
            className={`absolute left-[10px] top-6 h-full w-[2px] ${
              isCompleted ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        )}

        {/* Circle */}
        <div
          className={`relative z-10 w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 ${
            isActive || isCompleted
              ? "bg-blue-600 border-blue-600"
              : "bg-white border-gray-400"
          }`}
        />

        {/* Label */}
        <p
          className={`text-sm font-medium ${
            isActive || isCompleted
              ? "text-blue-600"
              : "text-gray-700"
          }`}
        >
          {stage}
        </p>
      </div>
    );
  })}
</div>
          </div>

          {/* Project Notes */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Project Notes</h2>

            <p className="mb-4">
              {props.projectName} is currently in{" "}
              <b>{props.currentStatus}</b>.
            </p>

            <p className="mb-4">
              <b>Latest Update:</b> {props.projectNotes}
            </p>

            <p>
              <b>Next Steps:</b> {props.nextSteps || "To be determined."}
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white p-6 rounded-xl shadow-md h-full">
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
