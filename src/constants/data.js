export const REFERRED = "REFERRED";
export const INTERVIWED = "INTERVIWED";
export const HIRED = "HIRED";
export const JOINED = "JOINED";
export const REWARDED = "REWARDED";

export const candidates = [
  {
    candidateName: "Anmol Mahajan",
    candidateDesignation: "Sr. Engineer",
    status: JOINED,
    reward: 2000,
    remainingDaysForReward: "20",
    inProgress: true,
  },
  {
    candidateName: "Rahul",
    candidateDesignation: "Sr. Engineer",
    status: INTERVIWED,
    reward: 2000,
    inProgress: true,
  },
  {
    candidateName: "Sonu",
    candidateDesignation: "Sr. Engineer",
    status: HIRED,
    reward: 20000,
    inProgress: true,
  },
  {
    candidateName: "Rakesh",
    candidateDesignation: "Sr. Engineer",
    status: INTERVIWED,
    reward: 200,
    inProgress: true,
  },
  {
    candidateName: "Noor",
    candidateDesignation: "Sr. Engineer",
    status: REFERRED,
    reward: 2000,
    inProgress: true,
  },
  {
    candidateName: "John",
    candidateDesignation: "Sr. Engineer",
    status: REWARDED,
    reward: 2000,
    inProgress: true,
  },
  {
    candidateName: "Raghav",
    candidateDesignation: "Sr. Engineer",
    status: HIRED,
    reward: 20000,
    inProgress: true,
  },
  {
    candidateName: "Madhur",
    candidateDesignation: "Sr. Engineer",
    status: HIRED,
    reward: 200,
    inProgress: false,
  },
  {
    candidateName: "Harsh",
    candidateDesignation: "Sr. Engineer",
    status: REFERRED,
    reward: 2000,
    inProgress: true,
  },
  {
    candidateName: "Sanskaar",
    candidateDesignation: "Sr. Engineer",
    status: REWARDED,
    reward: 2000,
    inProgress: true,
  },
];

export const referralStatusIdxMap = {
  [REFERRED]: 1,
  [INTERVIWED]: 2,
  [HIRED]: 3,
  [JOINED]: 4,
  [REWARDED]: 5,
};
