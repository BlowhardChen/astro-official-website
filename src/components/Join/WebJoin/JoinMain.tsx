import React from "react";
import Banner from "./Banner";
import ProspectAnalysis from "./ProspectAnalysis";
import StoreShowcase from "./StoreShowcase";
import JoinConditions from "./JoinConditions";
import CooperationSupport from "./CooperationSupport";
import JoinProcess from "./JoinProcess";

const JoinMain: React.FC = () => {
  return (
    <main>
      {/* Banner */}
      <Banner />
      {/* 前景分析 */}
      <ProspectAnalysis />
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
