import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../App';


export function CasePage() {
    const { casesRows } = useContext(AppContext);
    const { caseId } = useParams();

    if (!casesRows.data) return <h3>Loading...</h3>
    const row = casesRows.data.find(row => row.id === parseInt(caseId));
    console.log(row);
    return <div>
        {JSON.stringify(row)}
    </div>
}