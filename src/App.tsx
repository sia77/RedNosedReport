import './App.css'
import { DisplayFindings } from './components/ReportDashboard'
import { useReports } from './hooks/useReport';

function App() {

  const { reports } = useReports("input.txt");


  return (
    <>
      <section id="center">
        <DisplayFindings allReports={reports} />
      </section>

    </>
  )
}

export default App
