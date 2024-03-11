import React from "react";
import { toast } from "react-toast";

import { useData } from "./api";
import Button from "./Button";

const Demo = () => {
  const {
    loading,
    showMorning,
    showSuccess,
    showError,
    showInfo,
    showWarn,
    showCustom,
    getSomeData
  } = useData();

  return (
    <div className="body">
      <div className="controllers">
        <Button content="Default" icon="🎉" onClick={showMorning} />
        <Button content="Success" icon="✅" onClick={showSuccess} />
        <Button content="Error" icon="💔" onClick={showError} />
        <Button content="Info" icon="📦" onClick={showInfo} />
        <Button content="Warning" icon="🚨" onClick={showWarn} />
        <Button content="Custom" icon="🦄" onClick={showCustom} />
        <Button
          content={loading ? "Loading..." : "Get Some Data"}
          icon="⏳"
          onClick={getSomeData}
        />
        <Button content="Hide All" icon="🧨" onClick={() => toast.hideAll()} />
      </div>
    </div>
  );
};

export default Demo;
