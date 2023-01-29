import { REWARDED } from "../../constants/data";
import Progressbar from "../Progressbar/Progressbar";

import { AiFillCheckCircle } from "react-icons/ai";
import { RxDot, RxAvatar } from "react-icons/rx";
import { referralStatusIdxMap } from "../../constants/data";

import { isMobile } from "react-device-detect";

import "./ReferralsTable.css";

const ReferralsTable = ({ referrals = [] }) => {
  const rows = isMobile ? [referrals[5]] : referrals;
  return (
    <div className="referrals-table-root">
      {!isMobile && (
        <div className="main-column header">
          <p>Candidate</p>
        </div>
      )}
      <div className="header rest-columns">
        {["Referred", "Interviwed", "Hired", "Joined", "Reward"].map(
          (label) => (
            <p>{label}</p>
          )
        )}
      </div>

      {rows.map(({ candidateName, candidateDesignation, status, reward }) => (
        <>
          {!isMobile && (
            <div className="candidate-info main-column">
              <RxAvatar size={"100%"} color="#333" className="avatar" />
              <div>
                <p className="name">{candidateName}</p>
                <p className="designation">{candidateDesignation}</p>
              </div>
            </div>
          )}
          <div className="rest-columns">
            <Progressbar
              orientation={isMobile ? "vertical" : "horizontal"}
              totalSteps={4}
              currentStep={referralStatusIdxMap[status]}
              achievedStepIcon={<AiFillCheckCircle />}
              unAchievedStepIcon={<RxDot />}
              currentStepIcon={<RxAvatar />}
              head={
                isMobile && (
                  <div className="candidate-info main-column">
                    <RxAvatar size={"100%"} color="#333" />
                    <div>
                      <p className="name">{candidateName}</p>
                      <p className="designation">{candidateDesignation}</p>
                    </div>
                  </div>
                )
              }
              trail={
                <p
                  className={`reward-info ${
                    status === REWARDED ? "rewarded" : "not-rewarded"
                  }`}
                >{`$ ${reward}`}</p>
              }
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default ReferralsTable;
