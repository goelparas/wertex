import Image from 'next/image'
import { withDeviceDetection } from '@/components/ui/hero-section/hero-section-wrapper'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type dimensions = {
    path: StaticImport,
    height?: number,
    width?: number
}
interface ImageProp extends React.ComponentProps<typeof Image> {
    isMobile: boolean,
    mobileImage: dimensions,
    desktopImage: dimensions
}
const CustomImg = (
    { isMobile,
        mobileImage,
        desktopImage, ...args }: ImageProp
) => {

    const Comp = isMobile ? mobileImage : desktopImage

    return (
        <Image  {...args} src={Comp.path} height={Comp?.height} width={Comp?.width}  />
    )
}

export default withDeviceDetection(CustomImg);