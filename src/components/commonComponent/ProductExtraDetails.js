const ExtraDetails = ({ info }) => {
    return (
        <div className="extraDetails">

            <div className="leftSec">
                {
                    info['left'].map((inf,i) =>
                        <span key={i.toString()}style={{ 'opacity': '0.5' }}>{inf}:</span>
                    )
                }
            </div>
            <div className="rightSec">
                {
                    info['right'].map((inf,i) => {
                        if (inf === 'In Stock')
                            return <span key={i.toString()} style={{ 'color': 'green', 'textDecoration': 'underline' }}>{inf}</span>;
                        else return <span key={i.toString()}>{inf}</span>;
                    }
                    )
                }
            </div>

        </div>
    )
}

export default ExtraDetails;