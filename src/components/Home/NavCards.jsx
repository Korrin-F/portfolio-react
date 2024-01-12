
import navcards from '../../data/navcards.json'
import NavCardCell from './NavCardCell';

const styles = {
    constainer: {
        backgroundColor: "var(--rose)"
    }
}


function NavCards() {
    return (
        <div className="container-fluid py-5 " style={styles.constainer}>
            <div className="row justify-content-evenly text-center">
                {navcards.map( (page, index) => {                      
                    return (
                        <NavCardCell
                        title={page.title}
                        pageLocation={page.location}
                        description={page.text}
                        key={index}
                        />
                    )                                   
                })}
            </div>
        </div>
    )
};

export default NavCards;