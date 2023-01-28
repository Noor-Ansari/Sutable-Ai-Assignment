import Seperator from "../Separator/Separator";
import "./Progressbar.css";

const Progressbar = ({
  currentStep,
  totalSteps,
  achievedStepIcon,
  unAchievedStepIcon,
  currentStepIcon,
  orientation = "horizontal",
  trail,
}) => {
  return (
    <div className={`${orientation} progress-bar-root`}>
      {Array.from(new Array(totalSteps)).map((_, idx) => (
        <>
          {idx !== 0 && (
            <Seperator
              orientation={orientation}
              color={idx + 1 <= currentStep ? "#0ed746" : "gray"}
            />
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
      {trail}
    </div>
  );
};

export default Progressbar;
