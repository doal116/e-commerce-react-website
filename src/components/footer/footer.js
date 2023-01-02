import './footer.css';
const Footer = ({ sec1, Tags }) => {
    return (
        <footer>
            <div className='sec1'>
                {
                    sec1.map(elem =>
                        <div className='elm'>
                            <div className='title'>
                                {elem.title}
                            </div>
                            {
                                elem.option.map(val =>
                                    <a href='/link'>{val}</a>
                                )
                            }
                        </div>

                    )

                }
            </div>
            <h3>Products Tag</h3>
            <div className='Tag'>
                {
                    Tags.map(tag =>
                        <div>{tag}</div>
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