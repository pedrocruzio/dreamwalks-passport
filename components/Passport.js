import HTMLFlipBook from 'react-pageflip';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


import { useRef } from 'react'


export default function Passport() {

    const book = useRef();
      
    return(
        <>
        <HTMLFlipBook 
            width={300}
            height={500}
            showCover
            mobileScrollSupport
            ref={book}
        >
            <div className="demoPage">
                <img src='/assets/images/passport/passport-cover.png'/>
            </div>
            <div className="demoPage">
                <img src='/assets/images/passport/passport-left.png'/>
            </div>
            <div className="demoPage">
                <img src='/assets/images/passport/front.png'/>
            </div>
            <div className="demoPage">
                <img src='/assets/images/passport/condado.png'/>
            </div>
            <div className="demoPage">
                <img src='/assets/images/passport/sanpatricio.png'/>
            </div>
            <div className="demoPage">
                <img src='/assets/images/passport/santurce.png'/>
            </div>
            <div className="demoPage">
                <img src='/assets/images/passport/passport-right.png'/>
            </div>
            <div className="demoPage">
                <img src='/assets/images/passport/passport-back.png'/>
            </div>
        </HTMLFlipBook>


        <span className="isolate inline-flex rounded-md shadow-sm">
      <button 
        onClick={() =>
                book.current.pageFlip().flipPrev()}
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        Previous
      </button>

      <button
      onClick={() =>
        book.current.pageFlip().flipNext()}
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Next</span>
        Next
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </span>
        </>
    )
}