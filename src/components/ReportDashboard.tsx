import { useMemo } from "react";
import { AnalyseReport } from "../utils/reportAnalysis";


export const DisplayFindings = ({ allReports }: { allReports: number[][] }) => {   

    
    const reportAssessment = useMemo(() => {
        return AnalyseReport(allReports)
    }, [allReports]) ;

    
    return (
        <>
            <h3>Red-Nosed Report...</h3>
            <div>
                {
                    reportAssessment.map((ra:any, i:number) => (
                        <div key={i} className="result">
                            <div>{ra.isSafe ? "Safe" : "Unsafe"}</div>
                            <div>&nbsp;</div>
                            <div className="flex">{
                                ra.levels.map((el:any)=> <div className="report_box" key={el}>{el}</div>)
                            }</div>
                        </div>
 
                    ))
                }
            </div>
        </>
    )
}