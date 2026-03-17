import { useEffect, useState } from 'react';
import './App.css'
import { DisplayFindings } from './components/ReportDashboard';
import { UploadFile } from './components/UploadFile';
import { useReports } from './hooks/useReport';

function App() {

  const [uploadedReport, setUploadedReports] = useState<number[][]>([])

const { reports: defaultReports } = useReports("input.txt");
  useEffect(()=> {
    if(uploadedReport.length === 0 && defaultReports.length >=0){      
      setUploadedReports(defaultReports);
    }
  }, [defaultReports]);
  

  const onFileLoaded = (reports:number[][]) => {
    setUploadedReports(reports);
  }

  return (
  <div className='main-wrapper'>
    
    <section className='top-content app_width'>
      <DisplayFindings allReports={uploadedReport} />
    </section>

    {/* BOTTOM SECTION */}
    <section className='bottom-footer bg_color'>
      <div className='flex-center'>
        <UploadFile onFileLoaded={onFileLoaded}/>
      </div>
    </section>

  </div>
  )
}

export default App
