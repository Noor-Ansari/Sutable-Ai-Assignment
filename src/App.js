import { useState } from "react";

import ReferralsTable from "./components/ReferralsTable/ReferralsTable";

import { candidates } from "./constants/data";

import "./App.css";
import { isMobile } from "react-device-detect";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={isMobile ? "mobile-root" : "desktop-root"}>
      <div className="header-section">
        <h1>Referral Status</h1>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className="main-section">
        <ReferralsTable
          referrals={candidates.filter(({ candidateName }) =>
            candidateName.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
          )}
        />
      </div>
    </div>
  );
}

export default App;
