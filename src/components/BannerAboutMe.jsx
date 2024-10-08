// import ColorImage from '.'
// import Button from './Button'
import { useTranslation } from 'react-i18next';


function BannerAboutMe(){
    const { t } = useTranslation('home');

    return(
        <>
        <div className="w-full h-screen bg-[#F2BF5E] flex justify-center flex-col">
            <div className="flex justify-center items-center w-full ">
                <div className='w-1/2 '>
                    <h1 className="flex flex-col pr-12 text-[#272F40] text-center text-2xl ">
                    {t('titleAboutMe')}
                    </h1>
                </div>
                <div className='w-1/2 flex items-center '>
                    <p className="w-4/5 text-justify text-[#E9E9E9] flex text-3xl">
                    {t('parrAboutMe')}
                    </p>
                </div>
            </div>
            <div className='flex flex-column pt-12 justify-center w-full'>
                {/* <div className='pr-14'>
                <Button text={t('button.knowMe')}/>
                </div>
                <div className=''>
                <Button text={t('button.downloadCV')}/>
                </div> */}

            </div>
        </div>

        </>
    )
}

export default BannerAboutMe;