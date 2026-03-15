import { useEffect, useState } from "react";
import { parseReports } from "../utils/reportParser";

export const useReports = (filePath:string) => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [reports, setReports] = useState<number[][]>([]);

    useEffect(()=>{

        const controller = new AbortController();


        const loadData = async() =>{
            setLoading(true);
            setError(null);

            try{
                const response = await fetch(filePath, {signal: controller.signal});

                if(!response.ok){
                    throw new Error("Fetch has failed.");
                }                    
                
                const allReports = await response.text();
                setReports(parseReports(allReports));

            }catch(err:any){
                if (err instanceof Error && err.name === "AbortError") {
                    return;
                }                
                
                const message = err instanceof Error ? err.message : "Unknown error";

                setError(`There was an issue loading data: ${message}`);
                console.error(`There was an issue loading data: ${err}`);
                
            }finally{
                if(!controller.signal.aborted){
                    setLoading(false);
                }                
            }
        }
        loadData();

        //Clean up function
        return () => {
            controller.abort();
        };
    }, [filePath]);

    return { loading, error, reports }
}