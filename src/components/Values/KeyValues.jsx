import Value from "./Value";
import values from '../../data/keyvalues.json';
import PageHeader from '../SectionHeader/PageHeader'
import './KeyValues.css'

function KeyValues() {
    return (
        <section class="" id="key-value">
            <section class="container"> 
            <PageHeader name="Key: Values" />       
                <div class="row justify-content-evenly text-center"> 
                            
                    <section class="col-8  m-5 text-center" id="values">
                        {/* <h2 class="text-center display-3 mb-1 mt-5 px-4 mx-auto">Key: Values</h2> */}
                        
                        {/* <div class="values-border pt-5">                     */}
                            <div class="row w-100 mx-auto justify-content-center text-center">
                                {/* <!-- make into cards --> */}
                                <div class="value col-10 col-sm-7 col-lg-4 py-4 px-2">
                                    <div class="card-body">
                                        <div class="circle" id="circle1"></div>
                                        <h5 class="card-title">Consolidation</h5>               
                                        <p class="card-text">I enjoy being organised. I am always interested in new ways to consolidate my code and retain a single source of truth.</p>                 
                                    </div>     
                                </div>
                                <div class="value  col-10 col-sm-7 col-lg-4 py-4 px-2">
                                    <div class="card-body">
                                        <h5>Simple Solutions</h5>
                                        <p class="">I aim for the simplest solutions. I think good code should be light and airy. As I continue to learn the languages, I am doing so with the aim of writing less code to achieve the same results.</p>
                                        <div class="circle" id="circle2"></div>
                                    </div> 
                                </div>
                            </div>
                        {/* </div> */}
                    </section>
                </div>
            </section>
        </section>
    )
}

export default KeyValues;