import { REWARDED } from "../../constants/data";
import Progressbar from "../Progressbar/Progressbar";
import Seperator from "../Separator/Separator";

import { AiFillCheckCircle } from "react-icons/ai";
import { RxDot, RxAvatar } from "react-icons/rx";
import { referralStatusIdxMap } from "../../constants/data";

import { isMobile } from "react-device-detect";

import "./ReferralsTable.css";

const ReferralsTable = ({ referrals = [] }) => {
  const rows = isMobile ? [referrals[5]] : referrals;
  return (
    <div className="referrals-table-root">
      <div className="header">
        {[
          "Candidate",
          "Referred",
          "Interviwed",
          "Hired",
          "Joined",
          "Reward",
        ].map((label) => (
          <p>{label}</p>
        ))}
      </div>

      <div className="body">
        {rows.map(({ candidateName, candidateDesignation, status, reward }) => (
          <div className="row">
            <div className="candidate-info">
              <RxAvatar size={"3rem"} color="#333" />
              <div>
                <p>{candidateName}</p>
                <span>{candidateDesignation}</span>
              </div>
            </div>
            <div>
              <Progressbar
                orientation={isMobile ? "vertical" : "horizontal"}
                totalSteps={4}
                currentStep={referralStatusIdxMap[status]}
                achievedStepIcon={<AiFillCheckCircle />}
                unAchievedStepIcon={<RxDot />}
                currentStepIcon={<RxAvatar />}
                trail={
                  <>
                    {status === REWARDED && (
                      <Seperator
                        orientation={isMobile ? "vertical" : "horizontal"}
                        color={status === REWARDED ? "#f8f9fa" : "gray"}
                      />
                    )}
                    <div
                      className={`reward-info ${
                        status === REWARDED ? "rewarded" : "not-rewarded"
                      }`}
                    >
                      <p>{`$ ${reward}`}</p>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralsTable;
