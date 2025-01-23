interface SunProps {
    stroke: string;
    className: string;
}
export default function Sun({stroke, className}: SunProps)
{
    return(
    <svg className={className} fill="none" viewBox="0 0 24 24">
    <path className={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 22h8M5 19h14M2 16h20"/>
    <path className={stroke} strokeLinecap="round" strokeWidth="1.5" d="M10 6.341a6 6 0 0 1 6.5 9.627h-9A5.977 5.977 0 0 1 6 12c0-.701.12-1.374.341-2M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393"/>
    </svg>
    )
}
