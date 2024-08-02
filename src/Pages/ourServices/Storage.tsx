import React from 'react'
import './StorageFacilities.css'

const Storage: React.FC = () => {
    return(
        <div className="storageWrap">
            <div className="storage">
                <div className="warri">
                    <div className="storagepics">
                        <div className="picturehold">
                            <div className="real">
                                <img src="https://pinnacleoilandgas.com/wp-content/uploads/2021/05/Warri-Storage-Terminal-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="picturehold">
                            <div className="real">
                                <img src="https://pinnacleoilandgas.com/wp-content/uploads/2021/05/Warri-Storage-Terminal-2-1536x922.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="storagewrite">
                        <div className="write">
                            <h1>Warri Storage Terminal</h1>
                            <p>
                                As part of our strategy of ensuring continued availability of the various petroleum products, we operate a 100,000MT storage terminal and jetty in Warri, adjacent the Warri Refinery.
                            </p>
                            <p>
                                The storage facility is designed to store a wide range of products, including PMS, JET A1, AGO, DPK and BASE OIL. The tanks are interchangeable, allowing significant product flexibility, and have floating roofs, greatly reducing evaporation and air pollution from volatile emissions from the storage area.
                            </p>
                            <p>
                                To ensure efficient product load out, the facility is equipped with a Truck loading Island for Gas Oil, Gasoline, JET A1, Base Oil and DPK. Each load out facility is equipped with multiple loading arms each capable of loading 120m3 of petroleum products per hour.
                            </p>
                            <p>
                                There is also a Truck park bay, for the efficient management of truck traffic. In line with the requirements of the law, we also have modern office facilities for the administration of operations as well as for the housing of key regulatory agencies legally required to be located in all product terminals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="others">
                <div className="othershold">
                    <div className="actualothers">
                        <p>Offshore Intake/ Offtake Facilities</p>
                        <div className="iconhold"></div>
                    </div>
                    <div className="actualothers">
                        <p>Storage Facilities</p>
                        <div className="iconhold"></div>
                    </div>
                    <div className="actualothers">
                        <p>Petroleum Product Marketing</p>
                        <div className="iconhold"></div>
                    </div>
                    <div className="actualothers">
                        <p>Logistics & Haulage Services</p>
                        <div className="iconhold"></div>
                    </div>
                </div>
            </div>
            <div className="getintouch">
                <div className="intouch">
                    <div className="info">
                        <p>DON'T HESITATE TO CONTACT US</p>
                        <h1>For better future and business, Let’s get started now!</h1>
                        <span>We provide innovative products & services for sustainable progress.</span>
                        <span>Our professional team works to increase productivity and cost effectiveness on the market.</span>
                        <button>Get in Touch</button>
                    </div>
                </div>
                <img src="https://media.istockphoto.com/id/1710190963/photo/fuel-tanker-truck-waiting-to-load-at-a-loading-dock-with-all-the-streets-occupied-by-other.webp?b=1&s=170667a&w=0&k=20&c=wwgiMX7_4NLGOXC72aiRZ8llEMYi6z0ps-5nozwNvWc=" alt="" />
            </div>
        </div>
    )
}

export default Storage