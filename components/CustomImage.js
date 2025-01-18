import { useState } from "react";
import Image from "next/image";

function CustomImage(props) {
    const { src, alt, width, height, styles, handleError } = props;
    const [imgaeUrl, setImageUrl] = useState(src);

    return (
        <>
            <Image
                src={imgaeUrl}
                alt={alt}
                width={width}
                height={height}
                style={styles}
                onError={() => {
                    handleError !== undefined ? handleError() : setImageUrl("/images/hanging-plant.png");
                }}
            />
        </>
    );
}
export default CustomImage;
