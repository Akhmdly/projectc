import styles from "../FooterBottom.module.css"
export default function FooterBottom(){
    return(
        <div>
            <div className={styles.footer_bottom}>
                <div className={styles.footer_menu}>
                    <article>
                        <h3>Şirkət</h3>
                        <ul>
                            <li>Haqqımızda</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Müştərilər</h3>
                        <ul>
                            <li>Ödəniş və Çatdırılma</li>
                            <li>Qaytarılma siyasəti</li>
                            <li>Müştəri xidmətləri</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Mağaza</h3>
                        <ul>
                            <li>Qadınlar</li>
                            <li>Kişilər</li>
                            <li>Uşaqlar</li>
                            <li>Endirim</li>

                        </ul>
                    </article>
                    <article>
                        <h3>Hesab</h3>
                        <ul>
                            <li>Qeydiyyat</li>
                            <li>Sifarişlərim</li>
                        </ul>
                    </article>
                    <div className={styles.apps_links}>
                        <img src="../src/appStore.png" alt="appStore" />
                        <img src="../src/googlePlay.png" alt="googlePlay" />
                    </div>

                </div>

                <div className={styles.footer_contacts}>
                    <ul>
                        <li style={{padding:"0 0 35px", fontWeight:"600"}}>help@mybrands.az</li>
                        <li style={{padding:"0 0 35px"}}>
                            <p className={styles.phone}>+994504114114</p>
                            <p className={styles.text}>Online mağaza</p>
                        </li>
                        <li className={styles.text} style={{fontSize:"13px"}}>
                        Müştəri xidməti ilə həftənin II, IV,V,VI,VII günləri 09:00 - 18:00-dək əlaqə saxlaya bilərsiniz. <br />
                        Həftənin I və III-cü günləri qeyri iş günüdür
                        </li>
                    </ul>
                </div>

            </div>
            <div className={styles.footer_last}>
                <p className={styles.copyright}>© MYBRANDS - BÜTÜN HÜQUQLAR QORUNUR</p>
                <nav>
                    <ul>
                        <li>Məxfilik Siyasəti</li>
                        <li>İstifadənin ümumi müddəaları və şərtləri</li>
                    </ul>
                </nav>


            </div>
        </div>
    )
}