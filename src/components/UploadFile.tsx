import { parseReports } from "../utils/reportParser";


interface UploadFileProps { onFileLoaded: (data: number[][]) => void}

export const UploadFile = ({onFileLoaded}:UploadFileProps) => {


    const handleFileUpload = async(event:React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];

        if(!file)  return;        
        const content = await file?.text();
        onFileLoaded(parseReports(content));
    }

    return (
        <div>
            <input type="file" accept=".txt" onChange={handleFileUpload}/>
        </div>
    )

}