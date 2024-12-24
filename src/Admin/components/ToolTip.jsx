import React from "react";
import { TbInfoCircle } from "react-icons/tb";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ToolTip = (props) => {
  const { tipp } = props;
  return (
    <Tippy content={tipp}>
      <span className="mx-2">
        <TbInfoCircle size={19} className="text-slate-600" />
      </span>
    </Tippy>
  );
};

export default ToolTip;
