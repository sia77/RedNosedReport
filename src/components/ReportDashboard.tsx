import { useReports } from "../hooks/useReport"


export const DisplayFindings = () => {

    const { loading, error, reports } = useReports("input.txt");

    console.log("jo:", reports);

    return (<>Hi there</>)


}