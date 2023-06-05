
interface ImageProps {
    name: string,
    im: string
}
export default function Image(props: ImageProps){

    const {
        name,
        im,
    } = props

    return (
        <img src={im} alt={name} style={{margin: 0, width: 300}}/>
    )
}