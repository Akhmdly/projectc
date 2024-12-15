import '../Footer.css';
export default function Footer(){
    return(
        <footer>
            <div className="footer-left">
                <div className="banner">
                    <h4>Bizi izləməyi unutmayın</h4>
                    <p className='footer-text'>Bizim müştərilər qrupuna qoşulun. Yeni məhsullar və aksiyalardan ilk <br />xəbərdar olun.</p>
                </div>
                <div style={{display:"flex",gap:"20px"}}>
                    <p style={{display:"flex",alignItems:"center",gap:"20px"}}>Bizi izləyin <span className="line"></span></p>
                    <div className="social-links">
                        <a target="_blank" href="https://www.facebook.com/mybrands.az/" className="facebook"> </a>
                        <a target="_blank" href="https://www.instagram.com/mybrands.az/" className="instagram"></a>
                        <a target="_blank" href="https://ru.linkedin.com/company/novco-group-of-companies" className="linkedin"></a>
                        <a target="_blank" href="https://www.youtube.com/user/MYBRANDS1TV" className="youtube"></a>
                        <a target="_blank" href="https://www.tiktok.com/@mybrands.az" className="tiktok"></a>
                    </div>

                </div>
            </div>
        </footer>
    )
}