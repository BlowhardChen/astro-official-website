import React from "react";
import MobileBanner from "./MobileBanner";
import MobileProspectAnalysis from "./MobileProspectAnalysis";
import StoreShowcase from "./StoreShowcase";
import JoinConditions from "./JoinConditions";
import CooperationSupport from "./CooperationSupport";
import JoinProcess from "./JoinProcess";

const JoinMain: React.FC = () => {
  return (
    <main className="bg-[#F5F6F8]">
      {/* Banner */}
      <MobileBanner />
      {/* 前景分析 */}
      <MobileProspectAnalysis />
      {/* 门店展示 */}
      <StoreShowcase />
      {/* 加盟条件 */}
      <JoinConditions />
      {/* 合作支持 */}
      <CooperationSupport />
      {/* 加盟流程 */}
      <JoinProcess />
    </main>
  );
};

export default JoinMain;
