export const ProgressBar = ({ progressPercentage = 50 }) => {
  return (
    <div className="h-[.4rem] my-4 w-full bg-skin-gray py-0">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-[.4rem] ${
          progressPercentage < 70 ? "bg-[red]" : "bg-[green]"
        }`}
      ></div>
    </div>
  );
};
