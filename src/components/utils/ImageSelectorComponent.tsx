const ImageSelector = ({ communityTitle }: { communityTitle: string }) => {
    return (
        <>
            {communityTitle == "Reddit" && (
                <img
                    src="assets/images/reddit-logo.webp"
                    style={{
                        objectFit: "cover",
                        width: "70px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                    }}
                ></img>
            )}
        </>
    );
};
export default ImageSelector;