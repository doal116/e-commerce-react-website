import './footer.css';
const Footer = ({ sec1, Tags }) => {
    return (
        <footer>
            <div className='sec1'>
                {
                    sec1.map((elem,i) =>
                        <div className='elm' key={i.toString()}>
                            <div className='title'>
                                {elem.title}
                            </div>
                            {
                                elem.option.map((val,i) =>
                                    <a href='/link' key={i.toString()}>{val}</a>
                                )
                            }
                        </div>

                    )

                }
            </div>
            <h3>Products Tag</h3>
            <div className='Tag'>
                {
                    Tags.map((tag,i) =>
                        <div key={i.toString()}>{tag}</div>
                    )
                }
            </div>
            <div className='copyright'>
                Copyright 2020 freshenesscom.com
            </div>
        </footer>
    )
}

export default Footer;