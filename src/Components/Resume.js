
import ResumeImg from '../resume.jpg';

export default function Resume () {
    const config = {
        link: 'https://www.pdffiller.com/jsfiller-desk10/?flat_pdf_quality=high&mode=ref&lang=en&ref=https%3A%2F%2Fwww.pdffiller.com%2Fen%2Fforms%2Fdashboard&projectId=1552386115&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-dss-v2=false&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&act-notary-pro-integration=false&jsf-pdfjs-fourth=false&jsf-fake-edit-embedded=false&isSkipEditorLoadFrequency=true&routeId=5cd079efe722a2872dfcb41270e970e3#9743aa9134a2451fb532da0bf23eb8e5'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
}
