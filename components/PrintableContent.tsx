'use client';

import { forwardRef } from 'react';
const PrintableContent = forwardRef<HTMLDivElement>(({values}: any, ref: any) => {
  return (
    <div className="h-0 overflow-hidden">
        <div
        ref={ref}
        className="w-full"
      >
        <h2 className=' text-xl font-bold'>Test Page</h2>
        <p className='page-break'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id necessitatibus nihil vero quidem adipisci minus et, aperiam illo. Obcaecati delectus aspernatur doloremque fuga veniam similique corrupti quam assumenda dignissimos.</p>
    </div>
    </div>
  )
});
PrintableContent.displayName = 'PrintableContent';

export {PrintableContent}