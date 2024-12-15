import { useNavigate } from 'react-router-dom';
import '../App.css';
export default function Main() {
    const navigate = useNavigate(); 

    return (
        <div>
            <div className="shopping-card">
                <div style={{ backgroundImage: "url('../../public/images/web-men.png')" }}>
                    <div className='card-div'>
                        <h2>Kişilər</h2>
                        <button onClick={() => navigate('/kishiler')}>Alış-verişə keç</button>
                    </div>
                </div>

                <div style={{ backgroundImage: "url('../../public/images/web-women.png')" }}>
                    <div className='card-div'>
                        <h2>Qadınlar</h2>
                        <button onClick={() => navigate('/qadinlar')}>Alış-verişə keç</button>
                    </div>
                </div>

                <div style={{ backgroundImage: "url('../../public/images/web-kids.png')" }}>
                    <div className='card-div'>
                        <h2>Uşaqlar</h2>
                        <button onClick={() => navigate('/ushaqlar')}>Alış-verişə keç</button>
                    </div>
                </div>
            </div>

            <div className='container-gray'>
                <div className='gray-part'>
                    <div className="icon">
                        <img src="../../public/images/delivery.svg" alt="delivery" />
                    </div>
                    <p>Tez və təhlükəsiz çatdırılma</p>
                </div>

                <div className='gray-part'>
                    <div className="icon">
                        <img src="../../public/images/clock.svg" alt="time" />
                    </div>
                    <p>Asan geri qaytarılma, zəmanətli və təhlükəsiz ödəniş</p>
                </div>

                <div className='gray-part'>
                    <div className="icon">
                        <img src="../../public/images/secure.svg" alt="security" />
                    </div>
                    <p>Tamamilə zəmanətli satış və xidmət</p>
                </div>

                <div className='gray-part'>
                    <div className="icon">
                        <img src="../../public/images/tshirt.svg" alt="t-shirt" />
                    </div>
                    <p>Geniş çeşiddə yüksək keyfiyyətli məhsullar</p>
                </div>
            </div>
        </div>
    );
}
