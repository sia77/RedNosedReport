
import type { ReportAssessment } from "../interface/interface";


export const AnalyseReport = (allReports:number[][]): ReportAssessment[] => {

    return allReports.map((report)=> {

        const diffs:number[] = [];
        for(let i=0; i< report.length-1; i++){
            diffs.push(report[i]-report[i+1]);
        }

        const isSafe = 
            diffs.every((n:number) => n >= 1 && n <=3 ) ||
            diffs.every((n:number) => n <= -1 && n >= -3 );

        return {isSafe, levels:report};

    });
}