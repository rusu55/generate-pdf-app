'use client';
import { useRef } from 'react';
import { Button } from './ui/button';
import  { useReactToPrint} from 'react-to-print'
import { PrintableContent } from './PrintableContent';

const PrintButton = () => {
    const documentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => documentRef.current,
        documentTitle: 'Video Questionnaire',
        bodyClass: 'p-16',
    });

  return (
    <div>
    <Button
      onClick={handlePrint}
      className="py-6 flex gap-2"> Print </Button>
    <PrintableContent
      ref={documentRef}          
    />
  </div>
  )
}

export default PrintButton