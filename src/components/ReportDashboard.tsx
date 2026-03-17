import { useMemo } from "react";
import { AnalyseReport } from "../utils/reportAnalysis";


export const DisplayFindings = ({ allReports }: { allReports: number[][] }) => {   

    
    const reportAssessment = useMemo(() => {

        return AnalyseReport(allReports);

    }, [allReports]) ;

    
    return (
        <>
            <div className="flex flex_direction">
                <h3>Red-Nosed Report...</h3>
                <div>
                    {
                        reportAssessment.map((ra:any) => (
                            <div key={ra.id} className="result">
                                <div>{ra.isSafe ? "Safe" : "Unsafe"}</div>
                                <div>&nbsp;</div>
                                <div className="flex">{
                                    ra.levels.map((el:any, index:number)=> <div className="report_box" key={`${ra.id}-lvl-${index}`}>{el}</div>)
                                }</div>
                            </div>    
                        ))
                    }
                </div>
            </div>
        </>
    )
}