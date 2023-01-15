const ImageSelector = ({ communityTitle }: { communityTitle: string }) => {
    return (
        <>
            {communityTitle == "REDDIT" ? (
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
            ) : communityTitle == "DC_INSIDE" ? (
                <img
                    src="assets/images/dcinside-logo.webp"
                    style={{
                        objectFit: "cover",
                        width: "70px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                    }}
                ></img>
            ) : (
                <></>
            )}
        </>
    );
};
export default ImageSelector;
