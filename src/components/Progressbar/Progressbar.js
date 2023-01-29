import "./Progressbar.css";

const Progressbar = ({
  currentStep,
  totalSteps,
  achievedStepIcon,
  unAchievedStepIcon,
  currentStepIcon,
  orientation = "horizontal",
  trail,
  head,
}) => {
  return (
    <div className={`${orientation} progress-bar-root`}>
      {head && (
        <>
          {head}
          <span
            className={`${orientation} separator`}
            style={{
              backgroundColor: currentStep > 0 ? "#0ed746" : "gray",
            }}
          ></span>
        </>
      )}
      {Array.from(new Array(totalSteps)).map((_, idx) => (
        <>
          {idx !== 0 && (
            <span
              className={`${orientation} separator`}
              style={{
                backgroundColor: idx + 1 <= currentStep ? "#0ed746" : "gray",
              }}
            ></span>
          )}
          <div
            className={
              idx + 1 <= currentStep ? "achieved icon" : "unachieved icon"
            }
          >
            {idx + 1 < currentStep
              ? achievedStepIcon
              : idx + 1 > currentStep
              ? unAchievedStepIcon
              : currentStepIcon}
          </div>
        </>
      ))}
      {trail && (
        <>
          <span
            className={`${orientation} separator`}
            style={{
              backgroundColor:
                currentStep === totalSteps + 1 ? "#0ed746" : "gray",
            }}
          ></span>
          {trail}
        </>
      )}
    </div>
  );
};

export default Progressbar;
