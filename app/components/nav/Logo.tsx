"use client"
import { useTheme } from 'next-themes'

const Logo = () => {
    const { theme, setTheme } = useTheme();
    return (
        <svg className='w-20 h-20'>
            <rect width={5+"rem"} height={5+"rem"} rx={1+"rem"} ry={1+"rem"} className='fill-primary-content'/>
            <image width={5+"rem"} href={`/hui_calligraphy_CDW_logo_dark.png`} />
        </svg>
    )
}

export default Logo
