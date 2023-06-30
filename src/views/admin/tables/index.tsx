import tableDataDevelopment from "./variables/tableDataDevelopment";
import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataComplex from "./variables/tableDataComplex";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import { useEffect, useState } from "react";

const Tables = () => {

  const [toApprove, setToApprove] = useState([]);

  async function getApprovals() {
    const response = await fetch('http://localhost:8000/admin');
    const data = await response.json();
    setToApprove(data);

    console.log("DATA", data);
  }

  useEffect(()=>{
    getApprovals();
  }, [])

  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5">
        <DevelopmentTable title="Waitlist for Approvals" tableData={toApprove} />
        <CheckTable title="Advertisers" tableData={tableDataCheck} />
      </div>

      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div> */}
    </div>
  );
};

export default Tables;
