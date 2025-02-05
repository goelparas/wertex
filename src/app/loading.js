import videoSource from "../cdn/logo_gif.gif"
const loading = () => {
    return (
        <div className="w-dvw h-dvh bg-background">
            <video src="../cdn/logo_gif.gif"  className="absolute w-1/2 inset-0"/>
        </div>
    )
}

export default loading