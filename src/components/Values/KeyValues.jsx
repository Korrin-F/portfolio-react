import Value from "./Value";
import values from '../../data/keyvalues.json';
import PageHeader from '../SectionHeader/PageHeader'
import './KeyValues.css'

function KeyValues() {
    return (
        <section className="" id="key-value">
            <section className="container"> 
            <PageHeader name="Key: Values" />       
                <div className="row justify-content-evenly text-center">                            
                    <section className="col-8  m-5 text-center" id="values">
                            <div className="row w-100 mx-auto justify-content-center text-center">
                                {values.map((value, index) => (
                                    <Value key={index} title={value.title} text={value.text} id={value.circleID} />
                                ))}                               
                            </div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default KeyValues;